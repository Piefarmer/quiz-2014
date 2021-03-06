var express = require('express');
var router = express.Router();

var quiz = require('./Quiz').Quiz(global.io);
quiz.Socket();

router.get('/', function (req, res) {
  var clientLobby = require('./client/lobby').ClientLobby();
  clientLobby.Route(req, res);
});

router.get('/presenter', function (req, res) {
  var presenterLobby = require('./presenter/lobby').PresenterLobby();
  presenterLobby.Route(req, res);
});



module.exports = router;
