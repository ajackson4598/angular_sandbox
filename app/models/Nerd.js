//This will be all that is required to create records in our database. Once we define our Mongoose model, it will let us handle creating, reading, updating, and deleting our nerds.

// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
	name : {type : String, default: ''}
});

