var mysql = require('mysql');  // External module for Node/Express

// code to test connection with NOde 

// Config of SQL pararameter to connect with NODE
var con = mysql.createConnection({
    host: 'localhost',  // local host / ip address of your machine
    user: "root",
    password: "Neptune6587",
    database: "world"
  });
  

// insert operation 
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //Insert a record in the "customers" table:
    var sql = "INSERT INTO CUSTDEMO (name, address) VALUES ('vodaphone', 'pune')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });

});

// //FETCH
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM CUSTDEMO", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
// });

// //DELETE OPERATION
// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DELETE FROM custdemo WHERE address = 'pune'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records deleted: " + result.affectedRows);
//     });
//   });


//update
con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE CUSTDEMO SET address = 'Channai' WHERE address = 'pune'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });