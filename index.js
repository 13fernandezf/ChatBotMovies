// dependencies
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
const server = express();
server.use(bodyParser.json());

server.post('/v2/gHook', function(request,response) {
  var requestUserContext = request.body.queryResult.parameters
  var requestUserQuery = request.body.queryResult.queryText
  var session = request.body.session;
  var responseObj = {}
  
  if(requestUserContext.banque_subject){
    responseObj=
      {  
        "fulfillmentText":"Coucou petite perruche 1",
        "fulfillmentMessages":[  
            {  
                text:[  
                    "Coucou petite perruche 3"
                ]
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
