var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var personSchema = new mongoose.Schema({
	IDPerson: Number,
	username: String,
	password: String,
	scope: [String],
	name: String,
	age: Number,
	email: String,
	phone: String,
	profession: String,
	address: String,
	image: String,
	listOfFriends: Array
});

personSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Person', personSchema);