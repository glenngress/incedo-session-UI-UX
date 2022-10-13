// const conn = require('mysql').createConnection({
//     host: "localhost",  // local host / ip address of your machine
//     user: "root",
//     password: "Neptune6587",
//     database: "star",
//     port: 3306
// });

// conn.connect();

// module.exports = conn;

const mysql = require('mysql');
const database = require('./dbConfig.js');


const db = new database();



var dbConn = mysql.createPool({
    host: db.getHostName(),
    user : db.getUserName(),
    password : db.getPassword(),
    database :db.getDataBaseName()
})   


//return con;


    module.exports = dbConn;