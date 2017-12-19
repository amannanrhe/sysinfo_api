//App setup for required modules
var express = require('express');
var path = require('path');

var router = express.Router();

//Get request sends index page with usage details
router.get('/',function(req,res,next){
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

//Get request to api which will display ip, os amd language information from request header
router.get('/api',function(req,res,next){
    var result = {ip:req.ip, language:req.headers['accept-language'].substring(0,5),os:req.headers['user-agent'].substring(13,44)};
    res.send(result);
}); 

module.exports = router;