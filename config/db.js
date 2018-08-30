
//Now that this file is defined and we've called it in our server.js using var db = require('./config/db');, you can call any items inside of it using db.url.
module.exports = {
	//url : 'mongodb://<user>:<pass>@mongo.onmodulus.net:27017/uw45mypu'
	url: 'mongodb://localhost:27017/mydb'
}