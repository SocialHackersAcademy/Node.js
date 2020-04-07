'use strict'

let http = require("http");

let server = http.createServer(function(req, res) {
  if (req.url === "/script.js") {
    res.statusCode = 200;    
    res.setHeader("Content-Type", "text/javascript");
    res.write(`document
    .getElementById('content').appendChild(document.createTextNode('Welcome to Server-land!'));`);
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
      <head>
        <title>My First Web Server</title>
      </head>
      <body>
        <h1>Hello, anyone there?</h1>
        <div id="content"></div>
        <script src="script.js"></script>
      </body>
    </html>
    `);
    res.end();
  }
});
server.listen(3000);
console.log('server up and running');