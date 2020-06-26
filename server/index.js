const fs = require('fs');
const path = require('path');
const http = require('http');
const express = require('express');


const port = process.env.PORT || 8080;
const app = express();

const root = '../build/';
app.use(express.static(root));
app.use((req, res) => {
  var ip;
  if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'].split(",")[0];
  } else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
  } else {
    ip = req.ip;
  } console.log("|" + ip + "|");
  fs.createReadStream(path.join(root, 'index.html')).pipe(res);
})


const server = http.createServer(app);
server.listen(port, () => {
  console.log('server run at port', port)
}
)
