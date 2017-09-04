var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
	IDPerson: Number,
	username: String,
	name: String,
	age: Number,
	email: String,
	phone: String,
	profession: String,
	address: String,
	image: String,
	listOfFriends: Array,
});

module.exports = mongoose.model('Person', personSchema);