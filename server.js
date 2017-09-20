var hapi = require('hapi');
var inert = require('inert');
var mongoose = require('mongoose');
var routes = require('./routes/routes.js');
var auth = require('hapi-auth-cookie');
var PubNub = require('pubnub');
var readline = require('readline');

var server = new hapi.Server();
server.connection({
    port: process.env.PORT || 8000,
    routes: {cors: true}
});

//mongoose.connect('mongodb://localhost:27017/IncubadoraDeNegocios');
mongoose.connect('mongodb://127.0.0.1:27017/IncubadoraDeNegocios');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

server.register([inert, auth], function(err){

 server.auth.strategy('session', 'cookie', {
    password: 'secretpasswordforencryption',
    cookie: 'angular-scaffold-cookie',
    ttl: 24 * 60 * 60 * 1000, // Set session to 1 day
    isSecure: false
  });
 

  server.route(routes.endpoints);
  console.log(routes.endpoints.length);
  

  server.start(function () {
      console.log('Server running at:', server.info.uri);
      /*var pubnub = new PubNub({
            subscribeKey: 'sub-c-871b7b46-9a9a-11e7-bec3-c65ebd354f7d',
            publishKey: 'pub-c-0e9c4d6d-1364-4c4e-89e3-b1ef0efde503'
        });

        pubnub.addListener({
          status: function(statusEvent){
            if(statusEvent.category === 'PNConnectedCategory'){
              console.log('Conectado');
            }else if(statusEvent.category === 'PNUnknownCategory'){
              console.log('Error');
            }
          },
          message: function(message){
            console.log('Mensaje: ', message.message);
            const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
           

        rl.question('Mensaje a enviar: ', (response) => {
          pubnub.publish({channel: 'sending2', message: response},function(status,response){
            console.log(status,response);
          });
          rl.close();
        });
          }
        });

        pubnub.subscribe({
          channels: ['sending']
        });*/
        
  });
});


