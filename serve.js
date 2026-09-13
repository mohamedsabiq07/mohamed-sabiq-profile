// Lightweight zero-dependency preview server for Mohamed Sabiq Portfolio
const http = require('http');
const fs = require('fs');
const path = require('path');

let PORT = parseInt(process.env.PORT, 10) || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let decodedUrl;
  try {
    decodedUrl = decodeURIComponent(req.url.split('?')[0]);
  } catch (e) {
    decodedUrl = req.url.split('?')[0];
  }

  let filePath = path.join(__dirname, decodedUrl === '/' ? 'index.html' : decodedUrl);

  // Prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end('Access denied');
    return;
  }

  function serveFile(targetPath) {
    fs.stat(targetPath, (err, stats) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }

      if (stats.isDirectory()) {
        const indexPath = path.join(targetPath, 'index.html');
        return serveFile(indexPath);
      }

      const ext = path.extname(targetPath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Length': stats.size,
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      });

      const stream = fs.createReadStream(targetPath);
      stream.pipe(res);
    });
  }

  fs.stat(filePath, (err, stats) => {
    if (err && path.extname(filePath) === '') {
      const htmlPath = filePath + '.html';
      fs.stat(htmlPath, (hErr, hStats) => {
        if (!hErr && hStats.isFile()) {
          return serveFile(htmlPath);
        }
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      });
      return;
    }
    serveFile(filePath);
  });
});

function startServer(port) {
  server.listen(port, '0.0.0.0', () => {
    console.log(`\n======================================================`);
    console.log(`⚡ Mohamed Sabiq Portfolio Server Running!`);
    console.log(`👉 Local:   http://localhost:${port}`);
    console.log(`👉 Network: http://127.0.0.1:${port}`);
    console.log(`======================================================\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`⚠️ Port ${port} is busy, trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(PORT);
