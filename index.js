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

const data = new Data()

const api = new Api({
    data: null,
    db: data,
})
app.use('/', express.static('front/build'))

app.get('/api/fetch/rooms', (req, res) => {
    api.getRegional(req.query.categoryId).then((results) => res.json(results))
})

app.get('/api/fetch/rooms', (req, res) => {
    api.getRooms().then((results) => res.json(results))
})

app.get('/api/fetch/room', (req, res) => {
    api.getRoom(req.roomId).then((results) => res.json(results))
})

app.get('/api/fetch/users', (req, res) => {
    api.getUsersByRoom(req.roomId).then((results) => res.json(results))
})

app.get('/api/fetch/user', (req, res) => {
    api.getUser(req.userId).then((results) => res.json(results))
})

app.get('/api/fetch/venue', (req, res) => {
    api.getUser(req.venueId).then((results) => res.json(results))
})

app.get('/api/add/user-to-room', (req, res) => {
    api.moveToRoom(req.userId, req.roomId).then((results) => res.json(results))
})

app.listen(port, async () => {
    await venues.init()
    await rooms.init()
    await users.init()

    console.log("Running on port: " + port)
})
