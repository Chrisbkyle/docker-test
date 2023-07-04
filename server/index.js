const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const dbConnect = require('./db/dbConnect')
const bodyParser = require('body-parser')
require('dotenv').config();
const PORT = process.env.PORT || 3001;

const server = http.createServer(app);    

// const whitelist = ['http://localhost:3000', 'http://3.25.114.242/'];
const whitelist = ['http://3.25.114.242/'];
const corsOptions = {
    origin: function (origin, callback) {
        if(!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}

app.use(cors(corsOptions));

app.use(bodyParser.json())

dbConnect.connectMySQL();

app.get('/', (req, res) => {
    res.json({message: 'testing dockerfiles'})
})

const testRouter = require('./routers/testRouter')

app.use('/api', testRouter)  

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}.`)
})
