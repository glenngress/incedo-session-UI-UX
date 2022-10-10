//var DatabaseOperations = require('./dboperations')
var express = require('express');
var app = express();
var dbConn = require('./db.js');
var signup =require('./signup');
var user =require('./user');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
   extended: true
}));

//GETTING ALL user
app.get('/users', function (req, res) {
   dbConn.query('SELECT * FROM user ', function (error, results) {
      if (error) throw error;
      return res.send(results);
   });
});

//GETTING user BY ID
app.get('/users/:id', function (req, res) {
   let user_id = req.params.id;
   dbConn.query('SELECT * FROM user where id=?', user_id, function (error, results) {
      if (error) throw error;
      return res.send(results);
   });
});

//ADD A NEW user (ID AUTO INCREMENTS)
app.post('/users/create', function (req, res) {
    let user = new User(req.body.Id,req.body.Name,req.body.Address,req.body.Location,req.body.Country);
//    
   dbConn.query('INSERT INTO user SET ?', user, function (error, results) {
      if (error) throw error;
      return res.send({message: `Successfully inserted with the new id:${results.insertId}`});
   });
});

//DELETING user BY ID
app.delete('/user/delete/:id', function (req, res) {
    let user_id = req.params.id;
   dbConn.query('DELETE FROM user where id=?', user_id, function (error, results) {
      if (error) throw error;
      return res.send({message: `user with the ${user_id} was deleted successfully`});
   });
});

//UPDATE A CITY
app.put('/user/update', function (req, res) {
   let id = req.body.ID;
   let user = new User(req.body.Id,req.body.Name,req.body.Address,req.body.Location,req.body.Country);
//    let name = req.body.Name;
//    let countryCode = req.body.CountryCode;
//    let district = req.body.District;
//    let population = req.body.Population;
   dbConn.query('UPDATE user SET ? WHERE Id=?',[user,id],function (error, results) {
      if (error) throw error;
      return res.send(results);
   });
});

//GETTING ALL singup
app.get('/signup', function (req, res) {
   dbConn.query('SELECT * FROM signup ', function (error, results) {
      if (error) throw error;
      return res.send(results);
   });
});

//ADD A NEW signup (ID AUTO INCREMENTS)
app.post('/signup/create', function (req, res) {
   let s = new signup(req.body.username,req.body.password);
    
  dbConn.query('INSERT INTO signup SET ?', s, function (error, results) {
     if (error) throw error;
     return res.send({message: `Successfully inserted with the new id:${results.insertId}`});
  });
});

var server = app.listen(3001, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})