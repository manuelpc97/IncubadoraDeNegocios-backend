var mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({
    listaOfPeople: Array,
    listaOfMessages: Array
});

module.exports = mongoose.model('Chat', chatSchema);