 var http = require("http");

 var good = ["You are smart!", "You are kind!", "You are amazing!"];
 var bad = ["You aren't very bright...", "You aren't very nice...", "You are seriously lacking in skill..."];

 http.createServer(function(request, response){
    var randomGood = good[Math.floor(Math.random()*good.length)];
   response.end(randomGood);
   }).listen(7000, function(){
     console.log("Server listening on http://localhost:7000");
   });

 http.createServer(function(request, response){
    var randomBad = bad[Math.floor(Math.random()*bad.length)];
   response.end(randomBad);
   }).listen(7500, function(){
     console.log("Server listening on http://localhost:7500");
   });