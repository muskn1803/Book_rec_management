const http = require("http");

const port = 8081;   //local port number

http.createServer((req,res)=>{          // call back function
res.writeHead(200, {"Content-Type": "text/html"});
res.write("<h2>Hey Server Started and you can proceed:-) </h2>");
res.end();

})
.listen(port, ()=>{     // call back function
    console.log(`Nodejs Server started Running on Port ${port}`);

})