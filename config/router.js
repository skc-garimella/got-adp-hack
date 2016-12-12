
'use strict';

const battle_controller = require('../controllers/battles');


module.exports = function(app) {
  app.get('/api/all', battle_controller.list);
  app.get('/api/ratings', battle_controller.ratings); 
  app.get('/api/:king', battle_controller.fetch); 
};