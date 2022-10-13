var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });


//creation
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

//insertion operation
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { companyName: "LT", address: "mumbai" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});