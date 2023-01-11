//Cindy Yang Level8 Section 86 Enhanced Web Server
var fs = require("fs");
var http = require("http");
var url = require("url");

http.createServer(function (request, response){
    var pathname = url.parse(request.url).pathname.substring(1);
    fs.readFile(pathname, function(err, data){
        if(err){ 
            console.log(err);
            response.writeHead(404, {"Content-Type": "text/plain"});
        }
        else{
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8081);

console.log("Server running at http://127.0.1:8081");
