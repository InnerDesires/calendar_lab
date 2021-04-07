var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database: 'calendar'
});

connection.connect( (err) => {
  if(err){
    console.log(`Error on DB connection: ${err}`)
  } else {
    console.log(`Successfuly connected to the MySQL database`)
  }
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
