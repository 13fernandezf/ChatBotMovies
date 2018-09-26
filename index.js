// dependencies
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const http = require('https');
var unirest = require("unirest");
var port = process.env.PORT || 8080;
// create serve and configure it.
const server = express();
server.use(bodyParser.json());

server.post('/', function(request,response) {
  var requestUserContext = request.body.queryResult.parameters
  var requestUserQuery = request.body.queryResult.queryText
  var responseObj = {}
  if(requestUserContext.banque_subject){
    responseObj={
      "fulfillmentMessages":[
        {
          "text": {
            "text": [
              "Très bien je transmets votre demande à l'équipe support. La demande est la suivante : '" + requestUserQuery + "'"
            ]
          }
        }
      ]
    } 
  } 
  return response.json(responseObj);
})

server.get('/getName',function (req,res){
    res.send('Florian Fernandez');
})
server.listen(port, function () {
    console.log("Server is up and running...");
})
