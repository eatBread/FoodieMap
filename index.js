//test
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))

 //  app.get('/', function(req, res){
 //  	res.send('Default Message')
 //  })
 //  
 //  app.get('/list_user', function(req, res){
 //    res.send('List All Users!')
 //  })
 
app.get('/index_test.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index_test.html");
})

app.get('/process_get', function(req, res) {
    var response = {
      "first_name": req.query.first_name,
      "last_name": req.query.last_name
    };
    console.log(response);
  res.end(JSON.stringify(response));
})

app.get('/', function(req, res){
    res.sendfile(path.join(__dirname + '/templates/map.html'));
})

var server = app.listen(8080, function() {
  var host = server.address().address
  var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
})

