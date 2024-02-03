
let fs=require("fs")
let http = require("http")

let server = http.createServer(function(req,res){

  if(req.url=="/about"){

    fs.writeFile("demo.text","Hello World!",function(error){
       
       
       if(error){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write("Demo text Added Fail")
        res.end()
       }
       else{ 
        res.writeHead(200,{"Content-Type":"text/html"})
       res.write("Demo Text Create")
       res.end()

       }
      

    })
  }
  


})

server.listen(5500)
console.log("Server run success");



