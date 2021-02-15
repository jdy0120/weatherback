var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '35.223.127.108',
  user     : 'root',
  password : '1111',
  database : 'mysql'
});
 
connection.connect();
 
connection.query('select * from user', function (error, results, fields) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
});
 
connection.end();