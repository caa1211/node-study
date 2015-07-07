require('shelljs/global');

var ip   = "127.0.0.1",
    port = 1337,
    http = require('http'),
    url = require("url");

function onRequest(request, response) {
    
	// console.log(request.method);
    // console.log(request.headers);
    // console.log(request.url);

    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    var queryData = url.parse(request.url, true).query;
    console.log("query data ", queryData);

    if(pathname == "/"){
    // Async call to exec()
	    var argv = queryData && queryData["argv"] || "";
		
		exec('./main ' + argv, function(status, output) {
		  console.log('Exit status:', status);
		  console.log('Program output:', output);

		  response.writeHead(200, {"Content-Type": "text/plain"});
		  response.write(output);
		  response.end();

		});
	}
  
}
http.createServer(onRequest).listen(port, ip);
console.log("Server has started: http://"+ip+":"+port);