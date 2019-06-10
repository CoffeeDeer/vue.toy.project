var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req,res){
    var url = req.url;

    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'} );
    //console.log(url);
    res.end(fs.readFileSync('.'+url));
});

app.listen(80);