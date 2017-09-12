var advertisement = require('../schemas/advertisement');


exports.createAdvertisement = {
    auth: {
        mode:'required',
        strategy:'session',
        scope: ['admin', 'regular']
      },
    handler: function (request, reply) {
        advertisement.find({}, 'IDAdvertisement', function (err, IDA) {
            if (!err) {
                var ID = 0;
                if (IDC[0] === undefined) {
                    ID = 1;
                } else {
                    ID = IDC[0].IDChat + 1;
                }
                var newAdvertisement = new person({
                    IDAdvertisement: ID,
                    name: request.payload.name,
                    description: request.payload.description,
                    image: request.payload.image
                });

                newAdvertisement.save();
                reply('Advertisement saved');
            } else {
                reply('Error');
            }
        }).sort({ _id: -1 });
    }
};

exports.getAdvertisements = {
    handler: function (request, reply) {
        var advertisements = advertisement.find({});
        return reply(advertisement);
    }
};

exports.editAdvertisement = {
    handler: function (request, reply) {
        var Advertisement = advertisement.find({ IDAdvertisement: request.params.IDAdvertisement });
        Advertisement.update({ $set: request.payload }, function (err) {
            if (err) {
                reply('Error');
            } else {
                reply('Advertisement edited');
            }
        });
    }
};

exports.deleteAdvertisement = {
    handler: function (request, reply) {
        var advertisementByID = advertisement.findOne({ IDAdvertisement: request.params.IDAdvertisement });
        advertisementByID.remove(function (err) {
            if (err) {
                reply('not deleted');
            } else {
                reply('deleted');
            }
        })
    }
};