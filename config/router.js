
'use strict';

const battle_controller = require('../controllers/battles');


module.exports = function(app) {
  app.get('/index', battle_controller.index);
  app.get('/api/', battle_controller.list);
  app.get('/api/ratings', battle_controller.ratings); 

  app.get('/api/:king', battle_controller.fetch); 
};