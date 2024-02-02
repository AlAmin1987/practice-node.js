// Http Server Create

const { log } = require('console')
let http = require('http')

let server = http.createServer(function(req,res){
    res.end(" Hello ! Programmer")
})

server.listen(5500)

    console.log("Server Sucessfully Run");

