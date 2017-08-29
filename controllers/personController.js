var person = require('../schemas/person');


exports.createPerson = {
	handler: function (request, reply) {
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
					name: request.payload.name,
					age: request.payload.age,
					email: request.payload.email,
					phone: request.payload.phone,
					profession: request.payload.profession,
					address: request.payload.address,
					image: request.payload.address
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
		temp.update({ $set: request.payload }, function (err) {
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

exports.getPersonByUsername = {
	handler: function (request, reply) {
		var personByUsername = person.find({ username: request.params.username });
		reply(personByName);
	}
};

exports.getPersonByAge = {
	handler: function (request, reply) {
		var personByAge = person.find({ age: request.params.age });
		reply(personByAge);
	}
};

exports.getPersonByEmail = {
	handler: function (request, reply) {
		var personByEmail = person.find({ email: request.params.email });
		reply(personByEmail);
	}
};

exports.getPersonByPhone = {
	handler: function (request, reply) {
		var personByPhone = person.find({ phone: request.params.phone });
		reply(personByPhone);
	}
};

exports.getPersonByProfession = {
	handler: function (request, reply) {
		var personByProfession = person.find({ profession: request.params.profession });
		reply(personByProfession);
	}
};

exports.getPersonByAddress = {
	handler: function (request, reply) {
		var personByAddress = person.find({ address: request.params.address });
		reply(personByAddress);
	}
};