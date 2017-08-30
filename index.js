//test
const express = require('express');
const path = require('path');
const app = express();
const request = require('request');

const PORT_NUM = 8080;
const GOOGLE_API_KEY = 'AIzaSyAWnS2pfv6DIGVleFEcPME3bEQ0WAmQGBU';
const NEARBY_SEARCH_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'


app.use('/public',express.static('public'));
 //  app.get('/', function(req, res){
 //  	res.send('Default Message')
 //  })
 //  
 //  app.get('/list_user', function(req, res){
 //    res.send('List All Users!')
 //  })
 
app.get('/index_test.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index_test.html");
});

app.get('/process_get', function(req, res) {
    var response = {
      "first_name": req.query.first_name,
      "last_name": req.query.last_name
    };
    console.log(response);
  res.end(JSON.stringify(response));
});

app.get('/nearby_search', function(req, api_res){
  var radius = req.query.radius ? req.query.radius : 150; //req.query.radius||150
  var params = {
    'location': req.query.location,
    'type': req.query.type,
    'key': GOOGLE_API_KEY,
    'radius': radius
  };
  request({url: NEARBY_SEARCH_URL, qs: params}, function(err, res, body){
    if (res.statusCode == 200) {
      api_res.json(body);
    }
    else
    {
      //error handler
    }
  });
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/public/template/map.html'));
});

var server = app.listen(PORT_NUM, function() {
  var host = server.address().address
  var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
});

