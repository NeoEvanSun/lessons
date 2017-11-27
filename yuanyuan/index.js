var http = require('http');
http.createServer(function(request,response){
   console.log('hello i am in');
   response.end('i am your friend');
}).listen(8001);
console.log('Server running at http://127.0.0.1:8001/');
