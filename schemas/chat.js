var mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({
    IDChat: Number,
    listOfPeople: Array,
    listOfMessages: Array
});

module.exports = mongoose.model('Chat', chatSchema);