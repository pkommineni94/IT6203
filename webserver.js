//webserver.js
// load module http
const http = require('http');
//add express middleware
const vacationPackage = require('./serverside/vacation-package');
//create a new instance of http.Server 
//Reference https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener
const server = http.createServer(vacationPackage);
server.listen(process.env.PORT || 8000);
console.log('Server running on port 8000.');