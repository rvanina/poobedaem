require('dotenv').config()

const express = require('express')

const knex = require('knex')({
    client: 'postgres',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
})

const Rooms = require('./data/rooms')
const Users = require('./data/users')
const Venues = require('./data/venues')

const rooms = new Rooms(knex)
const users = new Users(knex)
const venues = new Venues(knex)

const app = express()

const port = 8888

app.use('/', express.static('front/build'))

app.get('/rooms', async (req, res) => {
    res.json(await rooms.getAllWithUsersAndVenue())
})

app.listen(port, async () => {
    await venues.init()
    await rooms.init()
    await users.init()

    console.log("Running on port: " + port)
})
