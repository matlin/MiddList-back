var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//need to add restrictions on data and required fields
module.exports = mongoose.model('User', new Schema({
	username: String,
	password: {type: String, required: true},
	email: {type: String, required: true},
	firstName: String,
	lastName: String,
    posts: [Schema.Types.ObjectId]
}));