var person = require('../controllers/personController');

exports.endpoints = [
	{
		method: 'GET', 
		path: '/', 
		config: {handler: function(request, reply){reply('API IDN, Incubadora de Negocios')}}
	}, 
	{
		method : 'POST',
		path: '/IDN/createPerson',
		config: person.createPerson
	},
	{
		method : 'PUT',
		path: '/IDN/editPerson',
		config: person.editPerson
	},
	{
		method : 'DELETE',
		path: '/IDN/deletePerson/{IDPerson}',
		config: person.deletePerson
	},
	{
		method : 'GET',
		path: '/IDN/getPeople',
		config: person.getPeople
	},
	{
		method : 'GET',
		path: '/IDN/getPersonByName',
		config: person.getPersonByName
	},
	{
		method : 'GET',
		path: '/IDN/getPersonByAge',
		config: person.getPersonByAge
	},
	{
		method : 'GET',
		path: '/IDN/getPersonByEmail',
		config: person.getPersonByEmail
	},
	{
		method : 'GET',
		path: '/IDN/getPersonByPhone',
		config: person.getPersonByPhone
	},
	{
		method : 'GET',
		path: '/IDN/getPersonByProfession',
		config: person.getPersonByProfession
	},
	{
		method : 'GET',
		path: '/IDN/getPersonByAddress',
		config: person.getPersonByAddress
	},
	{
		method: 'GET',
		path: '/IDN/getPersonByUsername',
		config: person.getPersonByUsername
	}
]