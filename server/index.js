const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const dbConnect = require('./db/dbConnect')
const bodyParser = require('body-parser')
require('dotenv').config();
const PORT = process.env.PORT || 3001;

const server = http.createServer(app);    

const whitelistDeployed = ['http://13.239.37.239/'];
const whitelistLocal = ['http://localhost:3000'];
const corsOptions = {
    origin: function (origin, callback) {
        if(!origin || whitelistLocal.indexOf(origin) !== -1 || whitelistDeployed.indexOf(origin) !== -1) {
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
