var person = require('../controllers/personController');
var event = require('../controllers/eventController');
var chat = require('../controllers/chatController');
var advertisement = require('../controllers/advertisementController');
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
		path: '/IDN/Person',
		config: person.createPerson
	},
	{
		method: 'PUT',
		path: '/IDN/Person/{IDPerson}',
		config: person.editPerson
	},
	{
		method: 'DELETE',
		path: '/IDN/Person/{IDPerson}',
		config: person.deletePerson
	},
	{
		method: 'GET',
		path: '/IDN/People',
		config: person.getPeople
	},
	{
		method: 'GET',
		path: '/IDN/Person/{name}',
		config: person.getPersonByName
	},
	{
		method: 'PUT',
		path: '/IDN/addFriend/{IDPerson}',
		config: person.addFriend
	},
	{
		method: 'PUT',
		path: '/IDN/deleteFriend/{IDPerson}',
		config: person.deleteFriend
	},
	{
		method: 'POST',
		path: '/IDN/Business',
		config: business.createBusiness
	},
	{
		method: 'GET',
		path: '/IDN/Business',
		config: business.getBusiness
	},
	{
		method: 'PUT',
		path: '/IDN/Business/{id}',
		config: business.updateBusiness
	},
	{
		method: 'DELETE',
		path: '/IDN/Business/{id}',
		config: business.deleteBusiness
	},
	{
		method: 'GET',
		path: '/IDN/BusinessByCode/{code}',
		config: business.getBusinessByCode
	},
	{
		method: 'GET', 
		path: '/IDN/BusinessById/{id}', 
		config: business.getBusinessById
	},
	{
		method: 'PUT',
		path: '/IDN/addBusinessOwner/{id}',
		config: business.addOwner
	},
	{
		method: 'PUT',
		path: '/IDN/removeBusinessOwner/{id}',
		config: business.removeOwner
	},
	{
		method: 'POST',
		path: '/IDN/Group',
		config: group.createGroup
	},
	{
		method: 'GET',
		path: '/IDN/Groups',
		config: group.getGroups
	},
	{
		method: 'GET',
		path: '/IDN/Group/{id}',
		config: group.getGroupById
	},
	{
		method: 'PUT',
		path: '/IDN/Group/{id}',
		config: group.updateGroup
	},
	{
		method: 'DELETE',
		path: '/IDN/Group/{id}',
		config: group.deleteGroup
	},
	{
		method: 'PUT',
		path: '/IDN/addGroupMember/{id}',
		config: group.addMember
	},
	{
		method: 'PUT',
		path: '/IDN/addGroupEvent/{id}',
		config: group.addEvent
	},
	{
		method: 'PUT',
		path: '/IDN/removeGroupMember/{id}',
		config: group.removeMember
	},
	{
		method: 'PUT',
		path: '/IDN/removeGroupEvent/{id}',
		config: group.removeEvent
	},
	{
		method: 'POST',
		path: '/IDN/Message',
		config: message.createMessage
	},
	{
		method: 'GET',
		path: '/IDN/Messages',
		config: message.getMessages
	},
	{
		method: 'POST',
		path: '/IDN/Task',
		config: task.createTask
	},
	{
		method: 'GET',
		path: '/IDN/Tasks',
		config: task.getTasks
	},
	{
		method: 'GET',
		path: '/IDN/TasksByAdviser/{id}',
		config: task.getTasksByAdviser
	},
	{
		method: 'GET', 
		path: '/IDN/MessageById/{id}', 
		config: message.getMessageById
	},
	{
		method: 'GET',
		path: '/IDN/TasksByBusiness/{id}',
		config: task.getTasksByBusiness
	},
	{
		method: 'GET',
		path: '/IDN/TasksByAdviserAndBusiness/{idA},{idB}',
		config: task.getTasksByAdviserAndBusiness
	},
	{
		method: 'PUT',
		path: '/IDN/Task/{id}',
		config: task.updateTask
	},
	{
		method: 'DELETE',
		path: '/IDN/Task/{id}',
		config: task.deleteTask
	},
	{
		method: 'POST',
		path: '/IDN/Chat',
		config: chat.createChat
	},
	{
		method: 'GET',
		path: '/IDN/Chats',
		config: chat.getChats
	},
	{
		method: 'GET',
		path: '/IDN/ChatByID/{IDChat}',
		config: chat.getChatByID
	},
	{
		method: 'DELETE',
		path: '/IDN/Chat/{IDChat}',
		config: chat.deleteChat
	},
	{
		method: 'PUT',
		path: '/IDN/PersonInChat/{IDChat}',
		config: chat.deletePersonInChat
	},
	{
		method: 'PUT',
		path: '/IDN/MessageInChat/{IDChat}',
		config: chat.deleteMessageInChat
	},
	{
		method: 'PUT',
		path: '/IDN/PersonToChat/{IDChat}',
		config: chat.addPersonToChat
	},
	{
		method: 'PUT',
		path: '/IDN/MessageToChat/{IDChat}',
		config: chat.addMessageToChat
	},
	{
		method: 'POST',
		path: '/IDN/createEvent',
		config: event.createEvent
	},
	{
		method: 'GET',
		path: '/IDN/Events',
		config: event.getEvents
	},
	{
		method: 'GET',
		path: '/IDN/EventByName/{name}',
		config: event.getEventByName
	},
	{
		method: 'GET',
		path: '/IDN/EventByID/{IDEvent}',
		config: event.getEventByID
	},
	{
		method: 'DELETE',
		path: '/IDN/Event/{IDEvent}',
		config: event.deleteEvent
	},
	{
		method: 'PUT',
		path: '/IDN/Event/{IDEvent}',
		config: event.editEvent
	},
	{
		method: 'PUT',
		path: '/IDN/PersonToEvent/{IDEvent}',
		config: event.addPersonToEvent
	},
	{
		method: 'PUT',
		path: '/IDN/PersonInEvent/{IDEvent}',
		config: event.deletePersonInEvent
	},
	{
		method: 'POST',
		path: '/IDN/Advertisement',
		config: advertisement.createAdvertisement
	},
	{
		method: 'GET',
		path: '/IDN/Advertisements',
		config: advertisement.getAdvertisements
	},
	{
		method: 'PUT',
		path: '/IDN/Advertisement/{IDAdvertisement}',
		config: advertisement.editAdvertisement
	},
	{
		method: 'DELETE',
		path: '/IDN/Advertisement/{IDAdvertisement}',
		config: advertisement.deleteAdvertisement
	},
	{
		method: 'GET',
		path: '/IDN/logout',
		config: authController.logout
	},
	{
		method: 'POST',
		path: '/IDN/login',
		config: authController.login
	},
	{
		method: 'PUT',
		path: '/IDN/GroupToPerson/{IDPerson}',
		config: person.addGroup
	},
	{
		method: 'PUT',
		path: '/IDN/GroupFromPerson/{IDPerson}',
		config: person.deleteGroup
	},
	{
		method: 'PUT',
		path: '/IDN/EventToPerson/{IDPerson}',
		config: person.addEvent
	},
	{
		method: 'PUT',
		path: '/IDN/EventFromPerson/{IDPerson}',
		config: person.deleteEvent
	},
	{
		method: 'PUT',
		path: '/IDN/BusinessToPerson/{IDPerson}',
		config: person.addBusiness
	},
	{
		method: 'PUT',
		path: '/IDN/BusinessFromPerson/{IDPerson}',
		config: person.deleteBusiness
	}, 
	{
		method: 'GET', 
		path: '/IDN/PersonById/{IDPerson}', 
		config: person.getPersonById
	}	
]