'use strict';

const db = require('../config/db');

function execute( sql, callback) {
    db.query(sql, function(err,rows) {
		callback(err, rows);
	});
};

exports.select_all = function(callback) {
    const sql = 'select * from battles';
    execute(sql, callback); 
};

exports.select_king = function(data, callback) {
    const king = data.king; 
    const sql = 'select * from battles where attacker_king = ' + db.escape(king) + ' or defender_king = ' + db.escape(king) + 'order by year';
    console.log( sql );
    execute(sql, callback); 
};