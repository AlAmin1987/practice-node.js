const express = require("express")
const multer = require('multer')
const app = express()

// File Upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + '-' + file.originalname
      cb(null, name)
    }
  })
  
  const upload = multer({ storage: storage })

app.get("/submitted", function(req,res){
    res.status(200).sendFile(__dirname +"/index.html")
})
app.post("/submitted",upload.single("images"), function(req,res){
    res.status(200).send("File uploaded")
})

app.get('/test',function(req,res){
    res.status(200).send("Api Running")
})


app.listen(5500)
    console.log("Api Testing Success");
