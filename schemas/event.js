var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    dateAndTime: Date,
    listaOfPeople: Array,
    status: Boolean  
});

module.exports = mongoose.model('Event', eventSchema);