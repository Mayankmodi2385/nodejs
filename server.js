const http = require ('http');
http.createServer((req , res)=>{
    res.write("<h1>hi i am mayank modi</h1>");

res.end('hello');
}).listen(4900);