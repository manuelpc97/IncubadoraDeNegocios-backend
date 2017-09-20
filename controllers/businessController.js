var business = require('../schemas/business');

exports.createBusiness = {
   auth: {
        mode:'try',
        strategy:'session'
      },
	handler: function(request,reply){
        business.find({},'idBusiness code',
            function(err,idB){
                if(err){
                    reply('Error');
                }else{
                    var exist = false;
                    var id = 0;
                    var counter = 0;
                    if(idB[0] === undefined){
                        id = 1;
                    }else{
                        id = idB[0].idBusiness+1;
                        while(idB[counter] != undefined){
                            if(idB[counter].code === request.payload.code){
                                //exist = true;
                            }
                            counter++;
                        }
                    }
                    var newBusiness = new business({
                        idBusiness: id,
                        name: request.payload.name,
                        code: request.payload.code,
                        location: request.payload.location,
                        description: request.payload.description,
                        image: request.payload.image,
                        idOwners: request.payload.idOwners,
                        tasks: request.payload.tasks
                    });
                    console.log('new', newBusiness);
                    console.log(request.payload.count);
                    if(!exist){
                        newBusiness.save();
                        reply('Ok');    
                    }else{
                        reply('Codigo ya existente');
                    }    
                }
            }).sort({_id: -1});  
    }
};

exports.getBusiness = {
    handler: function(request,reply){
        var query = business.find({});
        return reply(query);
    }
};

exports.updateBusiness = {
    handler: function(request, reply){
        var temp = business.find({idBusiness: request.params.id});
        temp.update({$set: request.payload}, function(err){
                if(err){
                    reply('error');
                }else{
                    reply('ok');
                }
            });
    }
};

exports.deleteBusiness = {
    handler: function(request,reply){
        var businessName = request.params.id;
        business.findOneAndRemove({idBusiness: businessName}, 
            function(err){
                if(err){
                    reply('Error');
                }else{
                    reply('ok');
                }
            })
    }
};

exports.getBusinessByCode = {
    handler:function(request,reply){
        var query = business.find({code: request.params.code});
        reply(query);
    }
};

exports.getBusinessById = {
    handler: function(request,reply){
        var quer = business.find({idBusiness: request.params.id});
        return reply(quer);
    }
};

exports.addOwner = {
    handler: function(request, reply){
        var temp = business.find({idBusiness: request.params.id});
        temp.update({$push: {idOwners: request.payload.owner}},
            function(err){
                if(err){
                    reply('Error');
                }else{
                    reply('Ok');
                }
            });
    }
};

exports.removeOwner = {
    handler: function(request,reply){
        var temp = business.find({idBusiness: request.params.id});
        temp.update({$pull: {idOwners: request.payload.owner}},
            function(err){
                if(err){
                    reply('Error');
                }else{
                    reply('Ok');
                }
            });
    }
};

exports.addTask = {
    handler: function(request, reply){
        var temp = business.find({idBusiness: request.params.id});
        temp.update({$push: {tasks: request.payload.task}},
            function(err){
                if(err){
                    reply('Error');
                }else{
                    reply('Ok');
                }
            });
    }
};

exports.removeTask = {
    handler: function(request,reply){
        var temp = business.find({idBusiness: request.params.id});
        temp.update({$pull: {tasks: request.payload.task}},
            function(err){
                if(err){
                    reply('Error');
                }else{
                    reply('Ok');
                }
            });
    }
};
