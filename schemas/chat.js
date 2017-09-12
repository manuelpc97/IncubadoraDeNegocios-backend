var mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({
    IDChat: Number,
    listOfPeople: [Number],
    listOfMessages: [Number]
});

module.exports = mongoose.model('Chat', chatSchema);