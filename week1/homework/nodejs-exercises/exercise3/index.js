var http = require('http');

const html = '<html> <head> <link rel="stylesheet" type="text/css" href="style.css"/> <title>My First Web Server</title></head ><body> <h1>Hello, anyone there?</h1> <div id="content"></div> <script src="script.js"></script></body></html > ';
const javascript = "document.getElementById('content').appendChild(document.createTextNode('Welcome to Server-land!'));"
const css = '#content { color: blue }';
//create a server
let server = http.createServer(function (req, res) {
  //res.write('Hello World!'); //send a response back to the client

  if (req.url === "/"){
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end();
  }else if (req.url === "/script.js"){
    res.setHeader('Content-Type', 'text/javascript');
    res.write(javascript);
    res.end();
  }else if(req.url === "/style.css"){
    res.setHeader('Content-Type','text/css');
    res.write(css);
    res.end();
  }

});

server.listen(3000);