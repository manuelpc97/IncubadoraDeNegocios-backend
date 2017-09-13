var event = require('../schemas/event');


exports.createEvent = {
    //auth: {
        //mode:'required',
        //strategy:'session',
        //scope: ['admin', 'regular']
      //},
    handler: function (request, reply) {
        event.find({}, 'IDEvent', function (err, IDE) {
            if (!err) {
                var ID = 0;
                if (IDE[0] === undefined) {
                    ID = 1;
                } else {
                    ID = IDE[0].IDEvent + 1;
                }
                var newEvent = new person({
                    IDEvent: ID,
                    name: request.payload.name,
                    description: request.payload.description,
                    dateAndTime: request.payload.dateAndTime,
                    listOfPeople: request.payload.listOfPeople,
                    status: request.payload.status,
                    image: request.payload.image
                });

                newEvent.save();
                reply('Event saved');
            } else {
                reply('Error');
            }
        }).sort({ _id: -1 });
    }
};

exports.getEvents = {
    handler: function (request, reply) {
        var events = event.find({});
        return reply(events);
    }
};

exports.deleteEvent = {
    handler: function (request, reply) {
        var eventByID = event.findOne({ IDEvent: request.params.IDEvent });
        eventByID.remove(function (err) {
            if (err) {
                reply('not deleted');
            } else {
                reply('deleted');
            }
        })
    }
};

exports.getEventByName = {
    handler: function (request, reply) {
        var eventByName = person.find({ IDEvent: request.params.IDEvent });
        reply(eventByName);
    }
};

exports.getEventByID = {
    handler: function (request, reply) {
        var eventByID = person.find({ name: request.params.name });
        reply(eventByID);
    }
};

exports.editEvent = {
    handler: function (request, reply) {
        var event = group.find({ IDEvent: request.params.IDEvent });
        event.update({ $set: request.payload }, function (err) {
            if (err) {
                reply('Error');
            } else {
                reply('Event edited');
            }
        });
    }
};

exports.addPersonToEvent = {
    handler: function (request, reply) {
        var events = event.find({ IDEvent: request.params.IDEvent });
        events.update({ $push: { listOfPeople: request.payload.listOfPeople } }, function (err) {
            if (err) {
                reply('Error');
            } else {
                reply('Person added');
            }
        });
    }
};

exports.deletePersonInEvent = {
    handler: function (request, reply) {
        var events = event.find({ IDEvent: request.params.IDEvent });
        events.update({ $pull: { listOfPeople: request.payload.listOfPeople } }, function (err) {
            if (err) {
                reply('Error');
            } else {
                reply('person deleted');
            }
        });
    }
};