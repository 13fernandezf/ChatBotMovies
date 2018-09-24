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
      let response = "This is a sample response from your webhook!";//Default response from the webhook to show it’s working
      let responseObj= {
          "fulfillmentText":response,
          "fulfillmentMessages":[
              {
                  "text": {
                      "text": [
                          "Hello I m Responding to intent"
                      ]
                  }
              }
          ],
          "source":""
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