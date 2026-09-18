const http = require ('http');
const age = 23;
const server = http.createServer((req , res )=>{
    res.setHeader("content-type","text/json");
    res.write(
        `<html>
        <head>
            <title>
                NODEJS
            </title>
        </head>
        <body>
            <h1>hello my name is mayank</h1>
            <h2>`+new Date+`</h2>
            <h3>my age is `+age+`</h3>
        </body>
    </html>
    `)
    res.end();
})
server.listen(4900);