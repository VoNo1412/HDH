const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const server = express();

server.get('/', (req, res) => res.send('This is home page'));

server.get('/product', (req, res) => res.send('This is product page'))

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});