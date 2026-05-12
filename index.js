const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Nodejs Index, this is Juveriya!!');
});

server.listen(3000, () => {
    console.log('Server running at Port 3000!');
});