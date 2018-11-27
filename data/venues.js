class Venues {

    constructor(knex) {
        this.knex = knex
    }

    async init() {
        const tableExists = await this.knex.schema.hasTable(Venues.tableName)

        if (!tableExists) {
            return await this.knex.schema.createTable(Venues.tableName, t => {
                t.increments('id')
                    .primary()
                t.string('name')
                t.string('description')
                t.string('address')
                t.string('photo')
            })
        }
    }

    get(params) {

    }

    insert() {

    }
}

Venues.tableName = 'venues'

module.exports = Venues
