//var DatabaseOperations = require('./dboperations')
var express = require('express');
var app = express();
var dbConn = require('./db.js');;
var allowance =require('./allowance');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
   extended: true
}));

//GETTING ALL user
app.get('/allowance', function (req, res) {
    dbConn.query('SELECT * FROM allowance ', function (error, results) {
       if (error) throw error;
       return res.send(results);
    });
 });


 var server = app.listen(3003, function () {

    var host = server.address().address
    var port = server.address().port
 
    console.log("Example app listening at http://%s:%s", host, port)
 
 })