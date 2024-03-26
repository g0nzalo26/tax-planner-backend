// Inicializacion del servidor de express. 
// Se crea una instancia del servidor y se inicia para escuchar las solicitudes entrantes.

require('dotenv').config();

const Server = require('./models/server');

const server = new Server();

server.listen();