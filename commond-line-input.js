const http = require('http');
const arg = process.argv;
const port = arg[2];
http.createServer((req , res)=>{
    res.write('write in cmd' )
        res.end();
}).listen(port);

