const express = require('express')

const app = express()

const port = 8888

app.use('/', express.static('front/build'))

app.listen(port, function () {
    console.log("Running on port: " + port)
})
