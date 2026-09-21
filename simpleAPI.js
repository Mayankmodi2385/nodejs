const http = require('http');

const userData=[
{
    name : 'mayank',
    age : 23,
    email : 'mayankmodi7126@gmail.com'
},
{
    name : 'rahul',
    age : 20,
    email : 'rahul12@gmail.com'
},
{
    name : 'raju',
    age : 25,
    email : 'raju26@gmail.com'
}
]
const server=http.createServer((req , res )=>{

    res.end(JSON.stringify(userData));
})
server.listen(5000);