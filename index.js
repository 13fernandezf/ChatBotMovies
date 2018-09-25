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
  var occurence = request.body.queryResult.parameters.occurence
  var responseObj = {}
  if(occurence === 'conciergerie'){
    responseObj={
      "fulfillmentMessages":[
        {
          "text": {
            "text": [
              "Si j'ai bien comprit vous souhaitez faire une demande à la conciergerie, quelle est cette demande ?" 
            ]
          }
        }
      ]
    } 
  } else if(occurence === 'support') {
    responseObj={
      "fulfillmentMessages":[
        {
          "text": {
            "text": [
              "Si j'ai bien comprit vous souhaitez faire une demande au support, quelle est cette demande ?" 
            ]
          }
        }
      ]
    }
  } else {
    responseObj={
      "fulfillmentMessages":[
        {
          "text": {
            "text": [
              "Je n'ai pas comprit votre demande, vous souhaitez faire une demande au support ou à la conciergerie ?" 
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



server.post('/getMoviestest',function (req,res)  {
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

})