var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    IDEvent: Number,
    name: String,
    description: String,
    dateAndTime: Date,
    listOfPeople: [Number],
    status: String,
    image: String  
});

module.exports = mongoose.model('Event', eventSchema);