const express = require('express');
const exphbs = require('express-handlebars');
const axios = require('axios');
const API_KEY = require('./sources/keys.json').API_KEY;

const app = express();
const port = 3000;

//Handlebars Middleware
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req,res) => res.render('index', { title: 'Hack Your Temperature'}));

app.post('/weather', (req,res) => {
  const city = req.body.cityName;
  
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  
  axios.post(URL)
  .then(response => {
    const temperature = response.data.main.temp
    const city = response.data.name;
   
    res.render('index', { title: "Weather App", weatherText: `Temperature of ${response.data.name} 
    is ${temperature} Degrees` });

  })
  .catch(err => {
    console.log(err);
    res.render('index', { title: "Weather App", weatherText: "City not found!" })
  })

})
app.listen(port, () => console.log(`listening on port ${port}!`));