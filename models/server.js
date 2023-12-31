require('dotenv').config()
const express = require('express');
const cors = require('cors')

class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/usuario'

        this.middlewares()
        this.routes()
    }

    middlewares(){
        //CORS
        this.app.use(cors());


        //Lectura y parseo del body
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.userPath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }
}

module.exports = Server;