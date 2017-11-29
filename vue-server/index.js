var express = require('express');
var app =express();
app.use('/yuan',express.static('./dist'));
app.listen(8081);
