var mongoose = require('mongoose');

var groupSchema = new mongoose.Schema({
	idGroup: Number,
	name: String,
	members: Array,
	idChat: Number,
	events: Array,
	state: String,
	image : String
});

module.exports = mongoose.model('Group', groupSchema);