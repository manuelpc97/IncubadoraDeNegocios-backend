var persona = require('../schemas/persona');
var boom = require('boom');

exports.createPersona = {
	handler: function(request,reply){
		var newPersona = new persona({
			name : request.payload.name
		});

		newReservation.save(function (err) {
         	console.log(err);
         	if(err){
          		return reply(boom.notAcceptable('Error' + err));
         	}else{
           		return reply('ok');
        	}
      	});
	}
};