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
                t.specificType('tags', 'text[]')
                t.string('description')
                t.integer('room_id').unsigned().references('id').inTable('rooms')
            })
        }
    }

    get(params) {

    }

    async moveToRoom(userId, roomId) {
        return await this.knex(Users.tableName)
            .where({ id: userId })
            .update({ room_id: roomId })
    }
}

Users.tableName = 'users'

module.exports = Users
