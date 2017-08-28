var group = require('../schemas/group');

exports.createGroup = {
	handler:function(request,reply){
		group.find({}, 'idGroup', function(err,idG){
			if(!err){
				var id = 0;
				console.log(idG[0]);
				if(idG[0] === undefined){
					id = 1;
				}else{
					id = idG[0].idGroup + 1;
				}
				var newGroup = new group({
					idGroup: id,
					name: request.payload.name,
					members: request.payload.members,
					idChat: request.payload.idChat,
					events: request.payload.events,
					state: request.payload.state
				});

				newGroup.save();
				reply('ok');
			}else{
				reply('Error');
			}
		}).sort({_id:-1});
	}
};

exports.getGroups = {
	handler: function(request,reply){
		var groups = group.find({});
		return reply(groups);
	}
};

exports.updateGroup = {
	handler: function(request,reply){
		var temp = group.find({idGroup: request.params.id});
		temp.update({$set: request.payload}, function(err){
			if(err){
				reply('Error');
			}else{
				reply('Ok');
			}
		});
	}
};

exports.deleteGroup = {
	handler: function(request,reply){
		group.findOneAndRemove({idGroup: request.params.id}, 
			function(err){
				if(err){
					reply('Error');
				}else{
					reply('Ok');
				}
			});
	}
}