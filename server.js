var hapi = require('hapi');
var inert = require('inert');
var mongoose = require('mongoose');
var routes = require('./routes/routes');
var auth = require('hapi-auth-cookie');

var server = new hapi.Server();
server.connection({
   port: ~~process.env.PORT || 8000,
   routes: { cors: {
              credentials: true,
              origin: ['*']
            }
          }
   });

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/IncubadoraDeNegocios');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

server.register([inert, auth], function(err){

  server.auth.strategy('session', 'cookie', {
    password: 'cookie-auth-password-for-encryption',
    cookie: 'IncubadoraDeNegocios-cookie',
    ttl: 24 * 60 * 60 * 1000,
    isSecure: false
  });

  server.route(routes.endpoints);

  server.start(function () {
	    console.log('Server running at:', server.info.uri);
    });
});
