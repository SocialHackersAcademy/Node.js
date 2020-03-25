const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('hello from backend to frontend!');
    res.end();
});

server.listen(3000, () => {
    console.log('Your Temperature is runnig at port 3000');
});