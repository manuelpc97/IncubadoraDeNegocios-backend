var persona = require('../controllers/personaController');

exports.endpoints = [
	{
		method: 'GET', 
		path: '/', 
		config: {handler: function(request, reply){reply('API IDN, Incubadora de Negocios')}}
	}, 
	{
		method : 'POST',
		path: '/IDN/createPersona',
		config: persona.createPersona
	}
]