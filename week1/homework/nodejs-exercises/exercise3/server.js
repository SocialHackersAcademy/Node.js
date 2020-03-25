'use strict'

let http = require("http");
let url = require("url");

let server = http.createServer(function(req, res) {
  let path = url.parse(req.url)
  if (path === "/script.js") {
    res.statusCode = 200;    
    res.setHeader("Content-Type", "text/javascript");
    res.write(`<script>
    document.getElementById('content').appendChild(document.createTextNode('Welcome to Server-land!'));
    </script>`);
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