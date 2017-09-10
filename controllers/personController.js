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
						image: request.payload.address,
						listOfFriends: request.payload.listOfFriends,
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
	handler: function(request,reply){
		var groups = person.find({IDPerson: request.params.IDPerson});
		groups.update({$push: {groups: request.payload.group}},
			function(err){
				if(err){
					reply('Error');
				}else{
					reply('Ok');
				}
			});
	}
};

exports.removeGroup = {
	handler: function(request,reply){
		var groups = person.find({IDPerson: request.params.IDPerson});
		groups.update({$pull: {groups: request.payload.group}},
			function(err){
				if(err){
					reply('Error');
				}else{
					reply('Ok');
				}
			});
	}
};

exports.addEvent = {
	handler: function(request,reply){
		var events = person.find({IDPerson: request.params.IDPerson});
		events.update({$push: {events: request.payload.event}},
			function(err){
				if(err){
					reply('Error');
				}else{
					reply('Ok');
				}
			});
	}
};
exports.removeEvent = {
	handler: function(request,reply){
		var events = person.find({IDPerson: request.params.IDPerson});
		events.update({$pull: {events: request.payload.event}},
			function(err){
				if(err){
					reply('Error');
				}else{
					reply('Ok');
				}
			});
	}
};
exports.addBusiness = {
	handler: function(request,reply){
		var business = person.find({IDPerson: request.params.IDPerson});
		business.update({$push: {business: request.payload.business}},
			function(err){
				if(err){
					reply('Error');
				}else{
					reply('Ok');
				}
			});
	}
};
exports.removeBusiness = {
	handler: function(request,reply){
		var business = person.find({IDPerson: request.params.IDPerson});
		business.update({$pull: {business: request.payload.business}},
			function(err){
				if(err){
					reply('Error');
				}else{
					reply('Ok');
				}
			});
	}
};