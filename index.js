// dependencies
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const http = require('https');
var unirest = require("unirest");
let errorResposne = {
    results: []
};
var port = process.env.PORT || 8080;
// create serve and configure it.
const server = express();
server.use(bodyParser.json());
server.post('/getMovies',function (request,response)  {
  console.log('toto');

    console.log(request.body);
    if(request.body.queryResult.parameters.movies_occurence == "top rated") {
      return response.json({
        speech: 'Something went wrong!',
        displayText: 'Something went wrong!',
      })
    }
});
server.get('/getName',function (req,res){
    res.send('Swarup Bam');
});
server.listen(port, function () {
    console.log("Server is up and running...");
});