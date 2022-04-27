//Llamamos el modulo http
const http = require('http');
//Establecemos la url o IP de nuestro servidor      192.168.50.128
const hostname = '192.168.0.2';
//Establecemos el puerto de escucha
const port = 3000;
//Creamos una instancia HTTP con un request y un response
const server = http.createServer((req, res) => {
    //El servidor responder un codigo 200
    res.statusCode = 200;
    //El servidor respondera con un texto plano
    res.setHeader('Content-Type', 'text/html');
    //El servidor respondera el mensaje hola mundo con html
    res.end('Hola Mundo, me llamo Isaac\n');
});

server.listen(port, hostname, () =>{
    console.log(`El Servidor se esta ejecutando en http://${hostname}:${port}/`);
});