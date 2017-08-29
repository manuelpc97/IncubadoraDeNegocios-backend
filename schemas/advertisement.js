var mongoose = require('mongoose');

var advertisementSchema = new mongoose.Schema({
    IDAdvertisement: Number,
    name: String,
    description: String,
    image: String
});

module.exports = mongoose.model('Advertisement', advertisementSchema);