import express from 'express'
import drawRouter from './routes/route.js'

const app = express()

import './db_init.js'

app.use(express.json())

app.use('/draw', drawRouter)

app.listen(8089, (err, done) => {
    if (err) {
        console.log("err server");
    } else {
        console.log("server listening >>> 8089");
    }
});