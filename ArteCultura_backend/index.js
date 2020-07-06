let http = require('http');
let app = require('./config/express')();
const connector = require('./config/db');

// Creates an instance for the server;
http.createServer(app).listen(app.get('port'), function(){
  console.log('API running at port ' + app.get('port'));
  connector.connect;
});
