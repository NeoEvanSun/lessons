var express = require('express');
var app = express();
app.use(express.static('dist'))

app.listen(8001,function(){
  console.log('server on 8001')
})
