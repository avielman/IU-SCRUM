let $host = 'localhost';
let $user = 'root';
let $password = '';
let $database = '';

let mysql = require ('mysql');
  connection = mysql.createConnection({host = $host, user = $user, password = $password, database = $database}
  );

let userModel = {};
userModel.getUsers = function(callback){
  if (connection){
    connection.query('SELECT * FROM users ORDER BY id', function(error,))
  }
}