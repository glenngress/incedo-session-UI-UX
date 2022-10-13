//var DatabaseOperations = require('./dboperations')
var express = require('express');
var app = express();
var dbConn = require('./db.js');
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
 app.get('/users/:id', function (req, res) {
    let id=req.params.userid;
    dbConn.query('SELECT * FROM user WHERE userid=?', id,function (error, results) {
       if (error) throw error;
       return res.send(results);
    });
 });

 //ADD A NEW user (ID AUTO INCREMENTS)
app.post('/users/create', function (req, res) {
    let u = new user(req.body.userid,req.body.password,req.body.name,
        req.body.activefrom,req.body.role,req.body.status);
//    
   dbConn.query('INSERT INTO user SET ?', u, function (error, results) {
      if (error) throw error;
      return res.send({message: `Successfully inserted with the new id:`});
   });
});

//UPDATE A user
app.put('/users/update/:id', function (req, res) {
    let id = req.body.userid;
    let u = new user(req.body.userid,req.body.password,req.body.name,
        req.body.activefrom,req.body.role,req.body.status);
      console.log(JSON.stringify(u));
    dbConn.query('UPDATE user SET ? WHERE userid=?',[u,id],function (error, results) {
       if (error) throw error;
       return res.send(results);
    });
 });
 

 //DELETING user BY ID
app.delete('/users/delete/:id', function (req, res) {
    let id = req.body.userid;
   dbConn.query('DELETE FROM user where userid=?', id, function (error, results) {
      if (error) throw error;
      return res.send({message: `user with the ${id} was deleted successfully`});
   });
});
 

 var server = app.listen(3002, function () {

    var host = server.address().address
    var port = server.address().port
 
    console.log("Example app listening at http://%s:%s", host, port)
 
 })