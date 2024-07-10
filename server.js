const { createServer } = require('node:http');
const hostname = '127.0.0.1'; // localhost
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200; // OK 201 
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.write('<h1>MD18402 - AND103 - RestAPI</h1>');
  res.write('<p style="color:red;">Lab 2 - NodeJS - AND103</p>');
  res.write(`<h1>Nội dung 1</h1>
    <h2>Nội dung 2</h2>
    <h3>Nội dung 3</h3>`)
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});