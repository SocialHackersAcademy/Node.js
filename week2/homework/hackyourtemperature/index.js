const express = require('express');
const exphbs = require('express-handlebars');
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
  res.send(city);
})
app.listen(port, () => console.log(`listening on port ${port}!`));