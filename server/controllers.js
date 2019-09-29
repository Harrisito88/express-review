var restaurants = require('../restaurants.json');

const controllers = {
  // TODO
  getAllRestaurants: (req, res) => {
    res.status(200).send(restaurants);
  },
  //as why {params} // so you don't have to do req.
  getOneRestaurant: ({params}, res) => {
    //this is where we'd talk to database
    var restaurant = restaurants[params.id - 1];
    if (restaurant) {
      res.status(200).send(restaurant)
    } else {
      res.status(404).send('No restaurant with id ' + params.id)
    }
  },
  postRestaurant: (req, res) => {
    console.log('here');
    if(req.body.name && req.body.rating) {
    restaurants.push({
      restaurant_name: req.body.name,
      rating: req.body.rating
    })
    res.status(201).send('Added ' + req.body.name+ ' to restaurants')
  } else {
    res.status(404).send('Invalid restaurant format')
  }
  },
  deleteRestaurant: (req, res) => {
    var restaurant = restaurants[req.params.index]
    if(restaurant) {
      restaurants.splice(req.params.index, 1)
      res.status(200).send('Removed restaurant')
    } else {
      res.status(404).send('No restaurant at index ' + req.params.index)
    }
  }
}

module.exports =  controllers;