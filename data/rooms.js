const Venues = require('./venues')

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

    get(params) {

    }

    insert() {

    }
}

Rooms.tableName = 'rooms'

module.exports = Rooms
