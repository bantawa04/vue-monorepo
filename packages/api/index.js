const express = require('express')
const http = require('http')

const app = express()


    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())

    /** Rules of our API */
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
            return res.status(200).json({})
        }

        next()
    })

    /** Routes */

    /** Healthcheck */
    app.get('/date', (req, res, next) => res.status(200).json({ message: new Date().toLocaleDateString() }))

    /** Catch and return custom errors */
    app.use((error, req, res, next) => {
        const status = error.statusCode || 500
        const message = error.message
        const data = error.data
        res.status(status).json({ message: message, data: data })
    })

    /**Start server */
    http.createServer(app).listen(3000, () => console.log(`Server is running on port ${3000}`))
