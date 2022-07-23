var express = require('express');
var path = require('path');

var app = express();

// define routes here...
app.use(express.static(path.join(__dirname, '/dist/DemoHeroku')))
app.get('*', function(req, res){
    //res.sendFile(path.join(__dirname+'/dist/DemoHeroku/index.html'))
    res.sendFile(path.join(__dirname+'./dist/index.html'))
})

// start the server listening for requests
app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));


    