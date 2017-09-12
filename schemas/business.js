var mongoose = require('mongoose');

var businessSchema = new mongoose.Schema({
	idBusiness: Number,
	name: String,
	code: String,
	location: String,
	description: String,
	image: String,
	idOwners: [Number]
});

module.exports = mongoose.model('Business', businessSchema);