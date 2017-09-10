var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
	idMessage: Number,
	idEmisor: Number,
	body: String
});

module.exports = mongoose.model('Message', messageSchema);