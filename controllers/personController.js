var persona = require('../schemas/person');
var boom = require('boom');

exports.createPerson = {
	handler: function(request,reply){
		var newPerson = new person({
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