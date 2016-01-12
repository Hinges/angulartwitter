var express = require('express');
var path = require('path');
var router = express.Router();
var adjective = require('./../data/adjective');
var nouns = require('./../data/nouns');



router.get('/', function(request, response){
    response.sendFile(path.join(__dirname,'../public/views/index.html'));

});

router.get('/getNoun', function(request, response){
    response.send(nouns);

});

router.get('/getAdj', function(request, response){
    response.send(adjective);

});

module.exports = router;