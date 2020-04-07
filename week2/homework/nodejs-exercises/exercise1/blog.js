'use strict'

const express = require('express');
const app = express();
const fs = require("fs");

app.use(express.json());

app.post('/blogs', (req, res) => {
 // How to get the tile and content from the request??'
    fs.writeFileSync('./' + req.body.title, JSON.stringify(req.body));
    res.send("ok");
});

app.put('/blogs/:title', (req, res) => {
    
    // How to get the tile and content from the request??'
    if (fs.existsSync(req.body.title)) {
        // console.log(req.body);
        fs.writeFileSync('./' + req.body.title, JSON.stringify(req.body));
        res.end('ok')
    }
    else {
        res.end('post does not exist');
    };
});

app.delete('/blogs/:title', (req, res) => {
    console.log(req.query.title);

    if (fs.existsSync(req.query.title)) {
        fs.unlinkSync(req.query.title);
        res.end('ok');
    }
    else {
        res.end('post does not exist');
    };
});

app.get('/blogs/:title', (req, res) => {
    console.log(req.query.title);

    if (fs.existsSync(req.query.title)) {
        res.sendfile(req.query.title);
        // res.end('hello');
    }
    else {
        res.end('post does not exist');
    };
    // How to get the tilte from the url parameters?
    //res.sendfile(title);
})
app.listen(3000);
console.log('port running');


