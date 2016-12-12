'use strict';

const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql',
    database : 'got'
});

connection.connect(function(err) {
    if (err) {
    	console.error('Error connecting: ' + err.stack);
    	return;
	}
	console.log('Connection established');
});

module.exports = connection;
