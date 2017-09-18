var chat = require('../schemas/chat');


exports.createChat = {
    //auth: {
        //mode:'required',
        //strategy:'session',
        //scope: ['admin', 'regular']
      //},
    handler: function (request, reply) {
        chat.find({}, 'IDChat', function (err, IDC) {
            if (!err) {
                var ID = 0;
                if (IDC[0] === undefined) {
                    ID = 1;
                } else {
                    ID = IDC[0].IDChat + 1;
                }
                var newChat = new chat({
                    IDChat: ID,
                    listOfPeople: request.payload.listOfPeople,
                    listOfMessages: request.payload.listOfMessages
                });

                newChat.save();
                reply('Chat saved');
            } else {
                reply('Error');
            }
        }).sort({ _id: -1 });
    }
};

exports.getChats = {
    handler: function (request, reply) {
        var chats = chat.find({});
        return reply(chats);
    }
};

exports.getChatByID = {
	handler: function(request,reply){
		var chatByID = chat.find({IDChat: request.params.IDChat});
		return reply(chatByID);
	}
};

exports.deleteChat = {
    handler: function (request, reply) {
        var chatByID = chat.findOne({ IDChat: request.params.IDChat });
        chatByID.remove(function (err) {
            if (err) {
                reply('not deleted');
            } else {
                reply('deleted');
            }
        })
    }
};

exports.addPersonToChat = {
    handler: function (request, reply) {
        var chats = chat.find({ IDChat: request.params.IDChat });
        chats.update({ $push: { listOfPeople: request.payload.listOfPeople}}, 
            function (err) {
            if (err) {
                reply('Error');
            } else {
                reply('Person added');
            }
        });
    }
};

exports.deletePersonInChat = {
    handler: function (request, reply) {
        var chats = chat.find({ IDChat: request.params.IDChat });
        chats.update({ $pull: { listOfPeople: request.payload.listOfPeople } }, function (err) {
            if (err) {
                reply('Error');
            } else {
                reply('person deleted');
            }
        });
    }
};

exports.addMessageToChat = {
    handler: function (request, reply) {
        console.log(request.params.IDChat);
        console.log(request.payload.message);
        var chat2 = chat.find({ IDChat: request.params.IDChat});
        chat2.update({$push: { listOfMessages: request.payload.message} }, 
            function (err) {
            if (err) {
                reply('Error');
            } else {
                reply('Person added');
            }
        });
    }
};

exports.deleteMessageInChat = {
    handler: function (request, reply) {
        var chats = chat.find({ IDChat: request.params.IDChat });
        chats.update({ $pull: { listOfMessages: request.payload.listOfMessages } }, function (err) {
            if (err) {
                reply('Error');
            } else {
                reply('person deleted');
            }
        });
    }
};