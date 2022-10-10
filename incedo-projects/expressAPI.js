//var DatabaseOperations = require('./dboperations')
var express = require('express');
var app = express();
var dbConn = require('./db.js')
var city=require('./city');
var bodyParser = require('body-parser');
const City = require('./city');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
   extended: true
}));

//GETTING ALL CITIES
app.get('/cities', function (req, res) {
   dbConn.query('SELECT * FROM city LIMIT 20', function (error, results) {
      if (error) throw error;
      return res.send({cities: results});
   });
});

//GETTING CITY BY ID
app.get('/cities/:id', function (req, res) {
   let city_id = req.params.id;
   dbConn.query('SELECT * FROM city where id=?', city_id, function (error, results) {
      if (error) throw error;
      return res.send({city_data : results});
   });
});

//ADD A NEW CITY (ID AUTO INCREMENTS)
app.post('/cities/create', function (req, res) {
    let city = new City(req.body.Name,req.body.CountryCode,req.body.District,req.body.Population);
//    let name = req.body.Name;
//    let countryCode = req.body.CountryCode;
//    let district = req.body.District;
//    let population = req.body.Population;
   dbConn.query('INSERT INTO city SET ?', city, function (error, results) {
      if (error) throw error;
      return res.send({message: `Successfully inserted with the new id:${results.insertId}`});
   });
});

//DELETING CITY BY ID
app.delete('/cities/delete/:id', function (req, res) {
   let city_id = req.params.id;
   dbConn.query('DELETE FROM city where id=?', city_id, function (error, results) {
      if (error) throw error;
      return res.send({message: `City with the ${city_id} was deleted successfully`});
   });
});

//UPDATE A CITY
app.put('/cities/update', function (req, res) {
   let id = req.body.ID;
   let city = new City(req.body.Name,req.body.CountryCode,req.body.District,req.body.Population)
//    let name = req.body.Name;
//    let countryCode = req.body.CountryCode;
//    let district = req.body.District;
//    let population = req.body.Population;
   dbConn.query('UPDATE city SET ? WHERE Id=?',[city,id],function (error, results) {
      if (error) throw error;
      return res.send(results);
   });
});

var server = app.listen(3001, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})