// TODO
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const controllers = require('./controllers.js')

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(__dirname + '/../client/dist/'))

app.get('/restaurants', controllers.getAllRestaurants)
app.get('/restaurants/:id', controllers.getOneRestaurant)

app.post('/restaurants', controllers.postRestaurant)
app.delete('/restaurants/:index', controllers.deleteRestaurant)

app.listen(port, console.log(`${port} is listening`));
