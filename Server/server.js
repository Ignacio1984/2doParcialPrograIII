const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.cargarMiddlewares();
        this.cargarRutas();
    }

    cargarMiddlewares() {
        this.app.use( express.urlencoded() );
    }

    cargarRutas() {
        this.app.use("/api/ingredientes", require('./routes/ingredientes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server corriendo en el puerto ${this.port}`);
        })        
    }
}

module.exports = Server;
