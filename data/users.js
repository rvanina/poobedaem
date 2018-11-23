const Rooms = require('./rooms')

class Users {

    constructor(knex) {
        this.knex = knex
    }

    async init() {
        const tableExists = await this.knex.schema.hasTable(Users.tableName)

        if (!tableExists) {
            return await this.knex.schema.createTable(Users.tableName, t => {
                t.increments('id')
                    .primary()
                t.string('name')
                t.string('photo')
                t.specificType('tags', 'jsonb[]')
                t.string('description')
                t.integer('room_id').unsigned().references('id').inTable(Rooms.tableName)
            })
        }
    }

    get(params) {

    }

    insert() {

    }
}

Users.tableName = 'users'

module.exports = Users
