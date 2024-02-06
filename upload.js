const express = require("express")
const multer = require('multer')
const app = express()

app.get("/submitted", function(req,res){
    res.status(200).send(__dirname +"/index.html")
})
app.get('/test',function(req,res){
    res.status(200).send("Api Running")
})


app.listen(5500)
    console.log("Api Testing Success");
