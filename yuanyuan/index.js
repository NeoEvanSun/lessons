var http = require('http');
var fs= require('fs');
var image = fs.readFileSync('./dist/1d99c214.jpg');
var indexHtml = fs.readFileSync('./dist/index.html','utf-8');
http.createServer(function(request,response){
   console.log('hello i am in');
   console.log(request.url);
   if(request.url == "/"){
     response.end(indexHtml);
   }else if(request.url == "/hellofile"){
     response.end(image)
   }else{
     response.end('无此请求')
   }

}).listen(8001);
console.log('Server running at http://127.0.0.1:8001/');
