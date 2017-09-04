var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
	idTask: Number,
	date: Date,
	activity: String,
	state: String,
	idAdviser: Number,
	idBusiness: Number
});

module.exports = mongoose.model('Task', taskSchema);