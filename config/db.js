
//Now that this file is defined and we've called it in our server.js using var db = require('./config/db');, you can call any items inside of it using db.url.
const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/";
var dbo = null; 

var connection =  MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
    if (err) throw err;
    db = db.db("mydb");
    db.createCollection("nerds", function(err, res) {
      if (err) throw err;
      console.log("Nerds Collection created!");
    });
  }) 

  module.exports.connection = connection; 
  module.exports.url = 'mongodb://localhost:27017/mydb';  
