/*

const http = require('http');

// Crea el servidor
const server = http.createServer((req, res) => {
    // Ruta raíz
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('¡Hola Mundo desde Node.js!\n');
    } else {
        res.writeHead(404);
        res.end();
    }
});

/* Arranca el servidor
server.listen(3000, () => {
    console.log('Servidor escuchando ...');
});



// Cada 5 segundos imprime en consola
const id = setInterval(() => console.log('¡Hola mundo!'), 5000);

// Después de 20 segundos detiene el intervalo
setTimeout(() => {
    clearInterval(id);
    console.log('¡Listo, pará la repetición!');
}, 20000);

*/

/*

import express from 'express'       
import dotenv from 'dotenv'

dotenv.config() 

const app = express()
const PORT = process.env.PORT || 3000


app.use(express.json())


app.get('/', (req, res) => {
  res.send('¡Hola mundo!')
})


import userRoutes from './routes/users.js'
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})


*/


//import {suma,resta} from ('./OperacionesEnteros/entero.js')
//import exp from('express');

const exp = require('express');

const app = exp();

app.get('/enteros', (req, res) => {
    const a = parseInt(req.query.a, 10);
    const b = parseInt(req.query.b, 10);


    const resultado = sumar(a, b);
    res.send(`<h2>La suma de ${a} + ${b} es ${resultado}</h2>`);
});


app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
})