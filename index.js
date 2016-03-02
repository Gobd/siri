var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// app.use(bodyParser.json());

var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];

function getRandomMessage(){
  var length = messages.length;
  var rand = Math.floor(Math.random()*length);
  return messages[rand];
}


app.get('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({
    message: getRandomMessage()
  }));
});

app.options('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send();
});

// var users = [{
//   name: 'Guy man',
//   city: 'NY City'
// },{
//   name: 'person alp',
//   city: 'good city'
// }];

// without a path this will for all paths
// app.use(bodyParser.json());
//
// //will send ok status and the contents of the users var
// app.get('/users', function(req, res, next){
//   res.status(200).json(users);
// });
//
// if method is get and path is users do this
// by responding in the manner rather than with req.body they will recieve anything the DB added to the object when it was written
// app.post('/users', function(req, res, next){
//   users.push(req.body);
//   res.status(200).json(users[users.length - 1]);
// });
//
// will delete last user and return the deleted user
// app.delete('/users', function(req, res, next){
//   var del = users.pop();
//   res.status(200).json(del);
// });

app.listen(8887, function(){
  console.log('Listening on port 8887');
});
