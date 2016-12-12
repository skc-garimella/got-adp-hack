'use strict';

const model = require('../models/battle');
const elo = require('elo-rank')(32);
const path = require('path');

/*
function elo_rank(rows) {
    var kings = {};
    rows.map( (row) => {
        
        if( !kings[row.attacker_king]) {
            kings[row.attacker_king] = {rating : 400, num_battles: 0};
        }
        if( !kings[row.defender_king]) {
            kings[row.defender_king] = {rating : 400, num_battles: 0};
        }
        var attacker = kings[row.attacker_king].rating;
        var defender = kings[row.defender_king].rating;
        
        var expectedScoreA = elo.getExpected(attacker, defender);
        var expectedScoreD = elo.getExpected(defender, attacker);
        
        if(row.attacker_outcome === 'win') {
            attacker = elo.updateRating(expectedScoreA, 1, attacker);
            defender = elo.updateRating(expectedScoreD, 0, defender);
        }
        else if(row.attacker_outcome === 'loss') {
            attacker = elo.updateRating(expectedScoreA, 0, attacker);
            defender = elo.updateRating(expectedScoreD, 1, defender);
        }
        else {
            attacker = elo.updateRating(expectedScoreA, 0.5, attacker);
            defender = elo.updateRating(expectedScoreD, 0.5, defender);
        }

         
        kings[row.attacker_king].rating = attacker;
        kings[row.defender_king].rating = defender;
        kings[row.attacker_king].num_battles += 1;
        kings[row.defender_king].num_battles += 1;
        //console.log(kings);
    } );
    return kings;
}
*/


function elo_rank(rows) {
    var kings = [];
    rows.map( (row) => {
        
        var attacker_index = kings.findIndex((king) => {return king.name === row.attacker_king;});
        if( attacker_index === -1 ) {
           attacker_index = kings.push({name: row.attacker_king, rating : 400, num_battles: 0}) - 1;
        }

        var defender_index = kings.findIndex((king) => {return king.name === row.defender_king;});
        if( defender_index === -1 ) {
           defender_index = kings.push({name: row.defender_king, rating : 400, num_battles: 0}) - 1;
        }

        
        var attacker = kings[attacker_index].rating;
        var defender = kings[defender_index].rating;
        
        var expectedScoreA = elo.getExpected(attacker, defender);
        var expectedScoreD = elo.getExpected(defender, attacker);
        
        if(row.attacker_outcome === 'win') {
            attacker = elo.updateRating(expectedScoreA, 1, attacker);
            defender = elo.updateRating(expectedScoreD, 0, defender);
        }
        else if(row.attacker_outcome === 'loss') {
            attacker = elo.updateRating(expectedScoreA, 0, attacker);
            defender = elo.updateRating(expectedScoreD, 1, defender);
        }
        else {
            attacker = elo.updateRating(expectedScoreA, 0.5, attacker);
            defender = elo.updateRating(expectedScoreD, 0.5, defender);
        }

         
        kings[attacker_index].rating = attacker;
        kings[defender_index].rating = defender;
        kings[attacker_index].num_battles += 1;
        kings[defender_index].num_battles += 1;
        //console.log(kings);
    } );
    return kings;

}


exports.index = function(req, res) {
    console.log(__dirname);
    res.sendFile(path.resolve('__dirname/../../client/index.html'));
};


exports.list = function(req, res) {
    var data = {};
    console.log(req.query);
    model.select_all(function(err, rows){
        res.send({'message': rows});
    });
};

exports.ratings = function(req, res) {
    var data = {};
    console.log(req.query);
    model.select_all(function(err, rows){
        data = elo_rank(rows);
        console.log(data);
        res.send({'message': data});
    });
};

exports.fetch = function(req, res) {
    var data = {};
    var tomodel = {};
    tomodel.king = req.params.king;
    model.select_king(tomodel, function(err, rows){
        console.log(err);
        res.send({'message': rows});
    });  
};


