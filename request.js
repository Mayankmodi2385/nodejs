const http = require('http');

http.createServer((req , res)=>{
    console.log(req.method)
    res.write("<h1>home page</h1>")
        res.end();
}).listen(4800);