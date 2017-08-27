var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
	ID: Number,
	name: String,
	age: Number,
	email: String,
	phone: String,
	profession: String,
	address: String
});

module.exports = mongoose.model('Person', personSchema);