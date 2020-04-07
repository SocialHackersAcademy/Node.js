'use strict'

const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.urlencoded({ extended: true} ));

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

// app.post('/weather', (req, res) => {
//     let form = req.body.form;
//     console.log(form);

// });

app.get("/", (req, res, next) => {
    res.render('index', { layout: false });
});

app.post("/weather", (req, res, next) => {
    let cityName = req.body.cityName;
    res.send(cityName);

    // res.render('index');
});

app.listen(3000, () => console.log('port 3000 running'));