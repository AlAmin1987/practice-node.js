
const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }

      const oldPath = files.file.path;
      const newPath = __dirname + '/uploads/' + files.file.name;

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(err);
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end('Internal Server Error');
   
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('File uploaded Success!');
      });
    });

   
  }


  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <form action="/" method="post" enctype="multipart/form-data">
      <input type="file" name="file">
      <input type="submit" value="Upload">
    </form>
  `);
});


server.listen(5500) 
  console.log("Server Run success port on 5500");

