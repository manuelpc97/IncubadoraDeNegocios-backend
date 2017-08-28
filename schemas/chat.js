var mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({
    IDChat: Number,
    listaOfPeople: Array,
    listaOfMessages: Array
});

module.exports = mongoose.model('Chat', chatSchema);