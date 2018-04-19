const http = require('http');
const hostname = '0.0.0.0';
let port;

if (process.argv[2]) {
  try {
    port = require(process.argv[2]).port;
  }
  catch(e) {
    port = 3000;
  }
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello! I'm running on port ${port}.`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
