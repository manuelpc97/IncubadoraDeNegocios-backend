var mongoose = require('mongoose');

var personaSchema = new mongoose.Schema({
	name : String;
});

module.exports = mongoose.model('Persona', personaSchema);