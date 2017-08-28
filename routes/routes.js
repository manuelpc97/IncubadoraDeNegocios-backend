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