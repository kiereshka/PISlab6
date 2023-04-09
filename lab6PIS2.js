const http = require('http')

http.createServer(function(request, response)
{
    if(request.url === "/" || request.url === "/")
    {
        response.write('<h1>You are home<h1>');
    }
    else if(request.url === "/is13")
    {
        response.write('<h1> Edward Higgins John, IS-13<h1>');
    }
    else
    {
        response.write('<h1>Mistake<h1>')
    }
}).listen(3000);