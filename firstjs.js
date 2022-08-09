console.log('hellow world');


const http = require('http');
const file = require('fs')

const server = http.createServer((request,response)=>{

   // response.end('Hellow WORLD'+'  This is the response ');
   file.readFile('./main.html',null,(err,data)=>{
    if (err) {
        return response.end('error');
    } else{
       response.end(data);
    }
   });

});

server.listen(3300,'127.0.0.1',()=>{
console.log('server is running now ...')
});
