var yy = {};
yy.action = function(callback){
  console.log("action");
  setTimeout(callback,5000);
  console.log("action end");
  return {listen:function(port){console.log('hello i am aa'+port)}};
}
yy.action(function(){
  console.log('我是 callback');
}).listen(8001);
