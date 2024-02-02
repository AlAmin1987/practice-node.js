
const { log } = require('console')
let http = require('http')

let server = http.createServer(function(req,res){

    if(req.url=='/'){
       res.writeHead('200',{"Content-Type":"text/html"})
       res.write("This is home page")
       res.end()
    }
    else if(req.url=='/about'){
        res.writeHead('200',{"Content-Type":"text/html"})
        res.write("This is about page")
        res.end()
    }
    else if(req.url=='/contact'){
        res.writeHead('200',{"Content-Type":"text/html"})
        res.write("This is contact page")
        res.end()
    }
     
})

server.listen(5500)
    console.log("Server run Successful");
