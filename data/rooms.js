const _ = require('lodash')

const Venues = require('./venues')
const Users = require('./users')

class Rooms {

    constructor(knex) {
        this.knex = knex
    }

    async init() {
        const tableExists = await this.knex.schema.hasTable(Rooms.tableName)

        if (!tableExists) {
            return await this.knex.schema.createTable(Rooms.tableName, t => {
                t.increments('id')
                    .primary()
                t.integer('capacity')
                t.string('description')
                t.timestamp('time')
                t.boolean('promo')
                t.integer('venue_id').unsigned().references('id').inTable(Venues.tableName)
            })
        }
    }

    async getWithUsersAndVenue(id) {
        return this.knex.select(
            this.knex.raw(`to_json(${Rooms.tableName}.*) as room`),
            this.knex.raw(`to_json(${Venues.tableName}.*) as venue`),
            this.knex.raw(`to_json(${Users.tableName}.*) as user`)
        ).from(Rooms.tableName)
            .where({ id })
            .leftJoin(Users.tableName, Rooms.tableName + '.id', '=', 'room_id')
            .leftJoin(Venues.tableName, 'venue_id', '=', Venues.tableName + '.id')
            .then((data) => Object.values(_.groupBy(data, (d) => d.room.id))
                .map(item => item.reduce((acc, item) => {
                    return {
                        room: acc.room,
                        venue: acc.venue,
                        users: (acc.users || [acc.user]).concat([item.user])
                    }
                }))
            )
    }

    getAllWithUsersAndVenue() {
        return this.knex.select(
            this.knex.raw(`to_json(${Rooms.tableName}.*) as room`),
            this.knex.raw(`to_json(${Venues.tableName}.*) as venue`),
            this.knex.raw(`to_json(${Users.tableName}.*) as user`)
        ).from(Rooms.tableName)
            .leftJoin(Users.tableName, Rooms.tableName + '.id', '=', 'room_id')
            .leftJoin(Venues.tableName, 'venue_id', '=', Venues.tableName + '.id')
            .then((data) => Object.values(_.groupBy(data, (d) => d.room.id))
                .map(item => item.reduce((acc, item) => {
                    return {
                        room: acc.room,
                        venue: acc.venue,
                        users: (acc.users || [acc.user]).concat([item.user])
                    }
                }))
            )
    }

}

Rooms.tableName = 'rooms'

module.exports = Rooms
