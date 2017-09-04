var person = require('../controllers/personController');
var event = require('../controllers/eventController');
var chat = require('../controllers/chatController');
var advertisement = require('../controllers/advertisementController');
var usersController = require('../controllers/usersController');
var authController = require('../controllers/authController');
var business = require('../controllers/businessController');
var group = require('../controllers/groupController');
var message = require('../controllers/messageController');
var task = require('../controllers/taskController');

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
	}, 
	{
		method: 'PUT',
		path: '/IDN/addFriend',
		config: person.addFriend
	}, 
	{
		method: 'PUT',
		path: '/IDN/deleteFriend',
		config: person.deleteFriend
 },
   {
		method : 'POST',
		path: '/createBusiness',
		config: business.createBusiness
	},
	{
		method: 'GET',
		path: '/getBusiness', 
		config: business.getBusiness
	},
	{
		method: 'PUT',
		path: '/updateBusiness/{id}',
		config: business.updateBusiness
	},
	{
		method: 'DELETE',
		path: '/deleteBusiness/{id}',
		config: business.deleteBusiness
	},
	{
		method: 'GET', 
		path: '/getBusinessByCode/{code}',
		config: business.getBusinessByCode
	},
	{
		method: 'PUT', 
		path: '/addBusinessOwner/{id}',
		config: business.addOwner
	},
	{
		method: 'PUT', 
		path: '/removeBusinessOwner/{id}',
		config: business.removeOwner
	},
	{
		method: 'POST',
		path: '/createGroup',
		config: group.createGroup
	},
	{
		method: 'GET', 
		path: '/getGroups',
		config: group.getGroups
	},
	{
		method: 'PUT',
		path: '/updateGroup/{id}',
		config: group.updateGroup
	},
	{
		method: 'DELETE', 
		path: '/deleteGroup/{id}', 
		config: group.deleteGroup
	},
	{
		method: 'PUT', 
		path: '/addGroupMember/{id}',
		config: group.addMember
	},
	{
		method: 'PUT', 
		path: '/addGroupEvent/{id}',
		config: group.addEvent
	},
	{
		method: 'PUT', 
		path: '/removeGroupMember/{id}',
		config: group.removeMember
	},
	{
		method: 'PUT', 
		path: '/removeGroupEvent/{id}',
		config: group.removeEvent
	},
	{
		method: 'POST',
		path: '/createMessage',
		config: message.createMessage
	},
	{
		method: 'GET', 
		path: '/getMessages', 
		config: message.getMessages
	},
	{
		method: 'GET', 
		path: '/getMessageByChat', 
		config: message.getMessageByChat
	},
	{
		method: 'POST', 
		path: '/createTask', 
		config: task.createTask
	},
	{
		method: 'GET', 
		path: '/getTasks', 
		config: task.getTasks
	},
	{
		method: 'GET', 
		path: '/getTasksByAdviser/{id}', 
		config: task.getTasksByAdviser
	},
	{
		method: 'GET', 
		path: '/getTasksByBusiness/{id}', 
		config: task.getTasksByBusiness
	},
	{
		method: 'GET', 
		path: '/getTasksByAdviserAndBusiness/{idA},{idB}', 
		config: task.getTasksByAdviserAndBusiness
	},
	{
		method: 'PUT', 
		path: '/updateTask/{id}', 
		config: task.updateTask
	}, 
	{
		method: 'DELETE',
		path: '/deleteTask/{id}', 
		config: task.deleteTask
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