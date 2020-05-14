const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'remotemysql.com',
    user: '4AKGw4oRY4',
    database: '4AKGw4oRY4',
    password: 'kGmoOTkrm5'
    
});

module.exports = pool.promise();