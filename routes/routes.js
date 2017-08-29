var business = require('../controllers/businessController');
var group = require('../controllers/groupController');
var message = require('../controllers/messageController');
var task = require('../controllers/taskController');


exports.endpoints = [
	{
		method: 'GET', 
		path: '/', 
		config: {handler: function(request, reply){reply('API IDN, Incubadora de Negocios')}}
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
	}
]