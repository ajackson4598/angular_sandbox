const path = require('path'); 
const Mongo = require("mongodb"); 

var MongoClient = require('mongodb').MongoClient, Server = require('mongodb').Server;

    module.exports = function(app) {
        db = MongoClient.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true }, function(err, client) {
            
        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        app.get('/nerds', function(req, res) {
            // use mongoose to get all nerds in the database
            db.find(function(err, nerds) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(nerds); // return all nerds in JSON format
            });
        });

        app.post('/nerds', (req, res) => {

            db.collection("nerds").insertOne({name:'world_no_safe'}, function(err, res){
                if (err) console.log; 
                console.log("Inserted: " + res.insertedId); 
                return "my bad";
            }); 
        })  //end post 

        // route to handle creating goes here (app.post)
        app.put('/nerds:id', (req, res)=>{
          Object.assign(Nerd[req.params.id], req.body)
          console.log('updated', Nerd[req.params.id])
          res.sendStatus(204)
        })
        
        // route to handle delete goes here (app.delete)
        app.delete('/nerds:id', (req, res)=>{
          Nerd.splice[req.params.id, 1]
          res.sendStatus(204)
        })

    }); //end mongo connection 

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
			console.log(__dirname); 

            res.sendFile(path.join(__dirname, '../public/views/index.html')); // load our public/index.html file
        });


        
             
    };