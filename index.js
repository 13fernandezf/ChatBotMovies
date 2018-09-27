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
                "text":[  
                    "Coucou petite perruche 3"
                ],
      
            }
        ],
        "source":"example.com",
        "payload":{  
            "google":{  
                "expectUserResponse":true,
                "richResponse":{  
                    "items":[  
                        {  
                            "simpleResponse":{  
                                "textToSpeech":"tCoucou petite perruche 2"
                            }
                        }
                    ]
                }
            },
            "facebook":{  
                "text":"Hello, Facebook!"
            },
            "slack":{  
                "text":"This is a text response for Slack."
            }
        },
        "outputContexts":[  
            {  
                "name":session,
                "lifespanCount":5,
                "parameters":{  
                    "param":"param value"
                }
            }
        ],
        "followupEventInput":{  
            "name":"event name",
            "languageCode":"en-FR",
            "parameters":{  
                "param":"param value"
            }
        }
      
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
