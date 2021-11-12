const express = require("express")

const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan');

const carsServer = require('./cars/cars-router');
// const { restart } = require("nodemon");

const server = express()

server.use(helmet())
server.use(cors())
server.use(morgan('dev'))
server.use(express.json());

server.use('/api/cars', carsServer)

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found',
    })
})

server.get('/', (req, res) => {
    res.status(200).json({
        status: 200, 
        message: 'This API is running!', 
        time: new Date().toLocaleTimeString(),
    })
})

module.exports = server
