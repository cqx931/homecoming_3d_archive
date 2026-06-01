const path = require('path'),
      open = require('open'),
      compression = require('compression'),
      express = require('express');

const http_port = 8000;

const app = express();
app.use(compression());
app.use(express.static(path.join(__dirname, 'build'), {
  setHeaders(res, filePath) {
    if (filePath.match(/\.(js|css|woff2?|ttf|otf|glb|png|jpe?g|svg|gif|mp3|pdf)$/i)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));
app.listen(http_port);
console.log('HTTP Server started at http://localhost:' + http_port);

open('http://localhost:' + http_port);
