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
  var requestUser = request.body.queryResult.parameters
  var responseObj = {}
  if(requestUser.banque_subject){
    responseObj={
      "fulfillmentMessages":[
        {
          "text": {
            "text": [
              "Très bien je transmets votre demande à l'équipe support.",
              "J'ai bien transmit votre demande à l'équipe support.",
              "Votre demande a bien été transmit à l'équipe support."
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
              "Vous voulez faire une demande à la conciergerie ?",
              "Si j'ai bien comprit vous voulez faire une demande à la conciergerie ?"
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

/**
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
 */