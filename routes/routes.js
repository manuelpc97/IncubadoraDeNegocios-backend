var person = require('../controllers/personController');
var event = require('../controllers/eventController');
var chat = require('../controllers/chatController');
var advertisement = require('../controllers/advertisementController');
var usersController = require('../controllers/usersController');
var authController = require('../controllers/authController');

exports.endpoints = [
	{
		method: 'GET',
		path: '/',
		config: { handler: function (request, reply) { reply('API IDN, Incubadora de Negocios') } }
	},
	{
		method: 'POST',
		path: '/IDN/createPerson',
		config: person.createPerson
	},
	{
		method: 'PUT',
		path: '/IDN/editPerson',
		config: person.editPerson
	},
	{
		method: 'DELETE',
		path: '/IDN/deletePerson/{IDPerson}',
		config: person.deletePerson
	},
	{
		method: 'GET',
		path: '/IDN/getPeople',
		config: person.getPeople
	},
	{
		method: 'GET',
		path: '/IDN/getPersonByName',
		config: person.getPersonByName
	},
	{
		method: 'GET',
		path: '/IDN/getPersonByAge',
		config: person.getPersonByAge
	},
	{
		method: 'GET',
		path: '/IDN/getPersonByEmail',
		config: person.getPersonByEmail
	},
	{
		method: 'GET',
		path: '/IDN/getPersonByPhone',
		config: person.getPersonByPhone
	},
	{
		method: 'GET',
		path: '/IDN/getPersonByProfession',
		config: person.getPersonByProfession
	},
	{
		method: 'GET',
		path: '/IDN/getPersonByAddress',
		config: person.getPersonByAddress
	},
	{
		method: 'GET',
		path: '/IDN/getPersonByUsername',
		config: person.getPersonByUsername
	}
],

	exports.endpoints = [
		{
			method: 'GET',
			path: '/',
			config: { handler: function (request, reply) { reply('API IDN, Incubadora de Negocios') } }
		},
		{
			method: 'POST',
			path: '/IDN/createEvent',
			config: event.createEvent
		},
		{
			method: 'GET',
			path: '/IDN/getEvents',
			config: event.getEvents
		},
		{
			method: 'GET',
			path: '/IDN/getEventByName',
			config: event.getEventByName
		},
		{
			method: 'DELETE',
			path: '/IDN/deleteEvent',
			config: event.deleteEvent
		},
		{
			method: 'PUT',
			path: '/IDN/editEvent',
			config: event.editEvent
		},
		{
			method: 'PUT',
			path: '/IDN/addPersonToEvent',
			config: event.addPersonToEvent
		},
		{
			method: 'PUT',
			path: '/IDN/deletePersonInEvent',
			config: event.deletePersonInEvent
		}
	],

	exports.endpoints = [
		{
			method: 'GET',
			path: '/',
			config: { handler: function (request, reply) { reply('API IDN, Incubadora de Negocios') } }
		},
		{
			method: 'POST',
			path: '/IDN/createChat',
			config: chat.createChat
		},
		{
			method: 'GET',
			path: '/IDN/getChats',
			config: chat.getChats
		},
		{
			method: 'DELETE',
			path: '/IDN/deleteChat',
			config: chat.deleteChat
		},
		{
			method: 'PUT',
			path: '/IDN/deletePersonInChat',
			config: chat.deletePersonInChat
		},
		{
			method: 'PUT',
			path: '/IDN/deleteMessageInChat',
			config: chat.deleteMessageInChat
		},
		{
			method: 'PUT',
			path: '/IDN/addPersonToChat',
			config: chat.addPersonToChat
		},
		{
			method: 'PUT',
			path: '/IDN/addMessageToChat',
			config: chat.addMessageToChat
		}
	],

	exports.endpoints = [
		{
			method: 'GET',
			path: '/',
			config: { handler: function (request, reply) { reply('API IDN, Incubadora de Negocios') } }
		},
		{
			method: 'POST',
			path: '/IDN/createAdvertisement',
			config: advertisement.createAdvertisement
		},
		{
			method: 'GET',
			path: '/IDN/getAdvertisements',
			config: advertisement.getAdvertisements
		},
		{
			method: 'GET',
			path: '/IDN/getAdvertisementByName',
			config: advertisement.getAdvertisementByName
		},
		{
			method: 'PUT',
			path: '/IDN/editAdvertisement',
			config: advertisement.editAdvertisement
		},
		{
			method: 'DELETE',
			path: '/IDN/deleteAdvertisement',
			config: advertisement.deleteAdvertisement
		}
	],

	exports.endpoints = [
		{
			method: 'GET',
			path: '/',
			config: { handler: function (request, reply) { reply('API IDN, Incubadora de Negocios') } }
		},
		{
			method: 'POST',
			path: '/v1/register',
			config: usersController.createUser
		},
		{
			method: 'GET',
			path: '/v1/logout',
			config: authController.logout
		},
		{
			method: 'POST',
			path: '/v1/login',
			config: authController.login
		}
	]