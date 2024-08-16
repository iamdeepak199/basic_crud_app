const mysql = require('mysql');
const express = require('express');

const app = express();
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "12345",
    database: "test"
});



connection.connect(function(err){
    if(err)
        throw err;
 //   console.log("connection successful..");
});

module.exports = connection;