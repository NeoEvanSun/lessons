var fs = require('fs');
//同步的方式读取
//var html = fs.readFileSync('./dist/index.html',"utf-8");
//console.log(html);

//promise
fs.readFile('./dist/index.html',function(err,data){
  if(err!=null){
    console.log('出错啦');
  }
  fs.writeFileSync('./dist/indexCopy.html',data.toString(),"utf-8")
})
