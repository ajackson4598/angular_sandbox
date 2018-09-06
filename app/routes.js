const path = require('path'); 
const Mongo = require("mongodb"); 
var dbinfo = require('../config/db'); 
var MongoClient = require('mongodb').MongoClient, Server = require('mongodb').Server;

    module.exports = function(app) {
        MongoClient.connect("mongodb://localhost:27017/mydb?socketTimeoutMS=90000", { useNewUrlParser: true }, function(err, client) {
        // server routes ===========================================================
        // TODO: add authentication routes

        db = dbinfo.connection;  

        app.get('/nerds', function(req, res) {
            res.sendFile(path.join(__dirname, '../public/views/index.html')); // load our public/index.html file

            // use mongoose to get all nerds in the database
            /*
            dbinfo.connection.find(function(err, nerds) {
                if (err)
                    res.send(err);
                res.json(nerds); // return all nerds in JSON format
            });
            */
        }); //end get /nerds 

        app.post('/nerds', (req, res) => {

            console.log("This is where you will save"); 
            res.sendFile(path.join(__dirname, '../public/views/index.html')); // load our public/index.html file

            /*
            dbinfo.connection.insertOne({name:'world_no_safe'}, function(err, res){
            if (err) console.log; 
            console.log("Inserted: " + res.insertedId); 
            return "my bad";
            });
            */ 
        })  //end post 

        app.put('/nerds:id', (req, res)=>{
          Object.assign(Nerd[req.params.id], req.body)
          console.log('updated', Nerd[req.params.id])
          res.sendStatus(204)
        })
        
        app.delete('/nerds:id', (req, res)=>{
          Nerd.splice[req.params.id, 1]
          res.sendStatus(204)
        })

        // frontend (angular) routes =========================================================
        app.get('*', function(req, res) {
			res.sendFile(path.join(__dirname, '../public/views/index.html')); // load our public/index.html file
        });

    }); //end mongo connection 
};