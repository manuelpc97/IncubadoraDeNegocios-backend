var person = require('../schemas/person');
var boom = require('boom');
var bcrypt = require('bcrypt');


exports.createPerson = {
	auth: {
		mode: 'try',
		strategy: 'session'
	},
	handler: function (request, reply) {
		bcrypt.hash(request.payload.password, 10, function (err, hash) {
			if (err)
				return reply(boom.notAcceptable('Error encrypting password'));
			var verifyUsername = request.payload.username;
			var unique = true;

			person.find({}, 'IDPerson username', function (err, IDP) {
				if (!err) {
					var ID = 0;
					for (var i = 0; i < IDP.length; i++) {
						if (verifyUsername === IDP[i].username) {
							unique = false;
						}
					}
					if (IDP[0] === undefined) {
						ID = 1;
					} else {
						ID = IDP[0].IDPerson + 1;
					}
					var newPerson = new person({
						IDPerson: ID,
						username: request.payload.username,
						password: hash,
						scope: request.payload.scope,
						name: request.payload.name,
						age: request.payload.age,
						email: request.payload.email,
						phone: request.payload.phone,
						profession: request.payload.profession,
						address: request.payload.address,
						image: request.payload.image,
						isAdviser: request.payload.isAdviser,
						listOfFriends: request.payload.listOfFriends,
						listOfGroups: request.payload.listOfGroups,
						listOfEvents: request.payload.listOfEvents,
						listOfBusiness: request.payload.listOfBusiness
					});

					if (unique) {
						newPerson.save();
						reply('Person saved');
					} else {
						reply('Not unique');
					}
				} else {
					reply('Error');
				}
			}).sort({ _id: -1 });
		});
	}
};

exports.getPeople = {
	handler: function (request, reply) {
		var People = person.find({});
		return reply(People);
	}
};

exports.editPerson = {
	handler: function (request, reply) {
		var Person = person.find({ IDPerson: request.params.IDPerson });
		Person.update({ $set: request.payload }, function (err) {
			if (err) {
				reply('Error');
			} else {
				reply('Person edited');
			}
		});
	}
};

exports.deletePerson = {
	handler: function (request, reply) {
		var personByID = person.findOne({ IDPerson: request.params.IDPerson });
		personByID.remove(function (err) {
			if (err) {
				reply('not deleted');
			} else {
				reply('deleted');
			}
		})
	}
};

exports.getPersonByName = {
	handler: function (request, reply) {
		var personByName = person.find({ name: request.params.name });
		reply(personByName);
	}
};

exports.getPersonById = {
	handler: function(request,reply){
		var personById = person.find({IDPerson: request.params.IDPerson});
		return reply(personById);
	}
};

exports.getPersonByAddress = {
	handler: function (request, reply) {
		var personByAddress = person.find({ address: request.params.address });
		reply(personByAddress);
	}
};

exports.addFriend = {
	handler: function (request, reply) {
		var friends = person.find({ IDPerson: request.params.IDPerson });
		friends.update({ $push: { listOfFriends: request.payload.listOfFriends } }, function (err) {
			if (err) {
				reply('Error');
			} else {
				reply('Person added to friends');
			}
		});
	}
};

exports.deleteFriend = {
	handler: function (request, reply) {
		var friends = person.find({ IDPerson: request.params.IDPerson });
		friends.update({ $pull: { listOfFriends: request.payload.listOfFriends } }, function (err) {
			if (err) {
				reply('Error');
			} else {
				reply('person deleted from friends');
			}
		});
	}
};

exports.addGroup = {
	handler: function (request, reply) {
		var groups = person.find({ IDPerson: request.params.IDPerson });
		groups.update({ $push: { listOfGroups: request.payload.group } }, function (err) {
			if (err) {
				reply('Error');
			} else {
				reply('Group added');
			}
		});
	}
};

exports.deleteGroup = {
	handler: function (request, reply) {
		var groups = person.find({ IDPerson: request.params.IDPerson });
		groups.update({ $pull: { listOfGroups: request.payload.group } }, function (err) {
			if (err) {
				reply('Error');
			} else {
				reply('Group deleted');
			}
		});
	}
};

exports.addEvent = {
	handler: function (request, reply) {
		var events = person.find({ IDPerson: request.params.IDPerson });
		events.update({ $push: { listOfEvents: request.payload.event } }, function (err) {
			if (err) {
				reply('Error');
			} else {
				reply('Event added');
			}
		});
	}
};
exports.deleteEvent = {
	handler: function (request, reply) {
		var events = person.find({ IDPerson: request.params.IDPerson });
		events.update({ $pull: { listOfEvents: request.payload.event } }, function (err) {
			if (err) {
				reply('Error');
			} else {
				reply('Event deleted');
			}
		});
	}
};
exports.addBusiness = {
	handler: function (request, reply) {
		console.log('Aqui');
		console.log( request.payload.business);
		var business = person.find({ IDPerson: request.params.IDPerson });
		business.update({ $push: { listOfBusiness: request.payload.business } }, function (err) {
			if (err) {
				reply('Error');
			} else {
				reply('Ok');
			}
		});
	}
};
exports.deleteBusiness = {
	handler: function (request, reply) {
		var business = person.find({ IDPerson: request.params.IDPerson });
		business.update({ $pull: { listOfBusiness: request.payload.business } }, function (err) {
			if (err) {
				reply('Error');
			} else {
				reply('Ok');
			}
		});
	}
};