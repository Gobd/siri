var express = require('express');
var bodyParser = require('body-parser');

var users = [{
  name: 'Guy man',
  city: 'NY City'
},{
  name: 'person alp',
  city: 'good city'
}];

var app = express();
//without a path this will for all paths
app.use(bodyParser.json());

//will send ok status and the contents of the users var
app.get('/users', function(req, res, next){
  res.status(200).json(users);
});

//if method is get and path is users do this
//by responding in the manner rather than with req.body they will recieve anything the DB added to the object when it was written
app.post('/users', function(req, res, next){
  users.push(req.body);
  res.status(200).json(users[users.length - 1]);
});

//will delete last user and return the deleted user
app.delete('/users', function(req, res, next){
  var del = users.pop();
  res.status(200).json(del);
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
});
