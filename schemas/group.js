var mongoose = require('mongoose');

var groupSchema = new mongoose.Schema({
	idGroup: Number,
	name: String,
	members: [Number],
	idChat: Number,
	events: [Number],
	state: String,
	image : String
});

module.exports = mongoose.model('Group', groupSchema);