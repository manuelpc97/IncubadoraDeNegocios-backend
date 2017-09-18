var message = require('../schemas/message');

exports.createMessage = {
	//auth: {
       // mode:'required',
        //strategy:'session',
        //scope: ['admin', 'regular']
      //},
	handler:function(request,reply){
		message.find({},'idMessage', function(err,idM){
			if(!err){
				var id = 0;

				if(idM[0] === undefined){
					id = 1;
				}else{
					id = idM[0].idMessage + 1;
				}

				var newMessage = new message({
					idMessage: id,
					idEmisor: request.payload.idEmisor,
					idChat: request.payload.idChat,
					body: request. payload.body
				});

				newMessage.save();
				reply('Ok');
			}else{
				reply('Error');
			}
		}).sort({_id:-1});
	}
};


exports.getMessages = {
	handler: function(request,reply){
		var messages = message.find({});
		return reply(messages);
	}
};

exports.getMessageById = {
	handler: function(request,reply){
		var message2 = message.find({idMessage: request.params.id});
		return reply(message2);
	}
}

