var task = require('../schemas/task');

exports.createTask = {
	handler: function(request,reply){
		task.find({}, 'idTask', function(err,idT){
			if(!err){
				var id = 0;

				if(idT[0] === undefined){
					id = 1;
				}else{
					id = idT[0].idTask + 1;
				}

				var newTask = new task({
					idTask: id,
					date: request.payload.date,
					activity: request.payload.activity,
					state: request.payload.state,
					idAdviser: request.payload.idAdviser,
					idBusiness: request.payload.idBusiness
				});

				newTask.save();
				reply('ok');
			}else{
				reply('Error');
			}
		}).sort({_id:-1});
	}
};

exports.getTasks = {
	handler: function(request,reply){
		var tasks = task.find({});
		return reply(tasks);
	}
};

exports.updateTask = {
	handler: function(request,reply){
		var temp = task.find({idTask: request.params.id});
		temp.update({$set: request.payload}, function(err){
			if(err){
				reply('Error');
			}else{
				reply('Ok');
			}
		});
	}
};

exports.deleteTask = {
	handler: function(request,reply){
		task.findOneAndRemove({idTask: request.params.id}, function(err){
			if(err){
				reply('Error');
			}else{
				reply('ok');
			}
		});
	}
}

