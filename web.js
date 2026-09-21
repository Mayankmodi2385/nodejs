const http = require('http');
const fs = require('fs');
const { errorMonitor } = require('events');
http.createServer((req, res)=>{
    fs.readFile('html/web.html','utf-8',(err, data)=>{
        if(err){
            res._construct('internal error');
            res.end();
            return
        }
        res.writeHead(200,{"content-type":'text/html'})
        res.write(data);
        res.end();
    })
}).listen(5000)