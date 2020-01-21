//lets return an object
var http = require('http');
//Requesting url lib
var url = require('url');
//create and read from text files(Locally)
var fileSystem = require('fs');
var userinput = "";


//node_modules never place in git
http.createServer(function (request, response) {

    
    
    var pathName = url.parse(request.url).pathname;
    //grabs everything after the host
    var fileName = pathName.substr(1); /* lets remove the "/" from the name */
    switch(fileName)
    {
        case "index": 
        userinput = "index.html"
        break;
        case "todo":
        userinput ="todo.json"
        //.writeHead(200, {'Content-Type': 'application/json'});
        break;
        case "read-todo":
        userinput = "read.html"
        break;
        default:
            userinput = "index.html"
            response.writeHead(301, {'Location': "http://" + request.headers['host'] + '/index' });
    }


    /* lets try to read the html page found */
    fileSystem.readFile(userinput , callback);

    function callback(err, data) {
        if (err) {
            console.error(err);
            /* Send the HTTP header 
             * HTTP Status: 400 : NOT FOUND
             * Content Type: text/html 
             * 
             */
           
            response.writeHead(301, {'Location': "http://" + request.headers['host'] + '/index' });
          // response.writeHead(400, {'Content-Type': 'text/html'});   
           // response.writeHead(400, {'Content-Type': 'application/json'});   
          //  response.write('<!DOCTYPE html><html><body><div>Page Not Found</div></body></html>');
        } else {

            /* Send the HTTP header 
             * HTTP Status: 200 : OK
             * Content Type: text/html 
             */
            switch(fileName) {
                case "index":
                    userinput = "index.html"
                  response.writeHead(200, {'Content-Type': 'text/html'});
                 
                  break;
                case "todo":
                    userinput = "todo.json"
                    response.writeHead(200, {'Content-Type': 'application/json'});
                  break;
                  case "read-todo":
                    userinput = "read.html"
                    response.writeHead(200, {'Content-Type': 'text/html'});
                default:
                    userinput = "index.html"
                    response.writeHead(200, {'Content-Type': 'text/html'});
                   
              }
             
      
              response.write(data.toString());
          
        }     
        
        /* the response is complete */
        response.end();
    }

   
}).listen(3000);

// Console will print the message
console.log('Server running at http://localhost:3000/'+userinput);