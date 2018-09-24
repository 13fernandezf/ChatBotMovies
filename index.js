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
server.post('/getMovies',function (req,res)  {
    var movies = req.body.queryResult.parameters.movies_name;
    if(movies){
      var response = "This is a sample response from your webhook!";//Default response from the webhook to show it’s working
      var responseObj={
        "fulfillmentText":response,
        "fulfillmentMessages":[
          {
            "text": {
              "text": [
                "Hello vous demandé des informations sur le film " + movies
              ]
            }
          }
        ]
        ,"source":""
      } 
    } else {
      var responseObj={
        "fulfillmentText":response,
        "fulfillmentMessages":[
          {
            "text": {
              "text": [
                "Je ne comprends pas votre demaande"
              ]
            }
          }
        ]
        ,"source":""
      } 
    }

    return res.json(responseObj);

});
server.get('/getName',function (req,res){
    res.send('Florian Fernandez');
});
server.listen(port, function () {
    console.log("Server is up and running...");
});