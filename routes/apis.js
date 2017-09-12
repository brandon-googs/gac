var express = require('express');
var router = express.Router();
var redis = require("redis");
var client = redis.createClient( 17739,  'redis-17739.c1.us-central1-2.gce.cloud.redislabs.com' );


/* GET home page. */
router.get('/autocomplete/:term', function(req, res, next) {
    console.log("query: " + req.param("term"));
    var args2 = ["movie", "[The", '(The\xff', 'LIMIT', "0", "2"];
    client.zrangebylex('products2', '[' + req.param("term"), '[' + req.param("term") + '\xff', 'LIMIT', "0", "10", 
    function(err, reply){
    if (err !== null){
      console.log("error: " + err);
        } else {
        var str = JSON.stringify(reply.sort());
        console.log(str);
        res.send(str, 200)
        }
    }); 
});

module.exports = router;