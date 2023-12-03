const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const routes = {
    '/': 'index.html',
    '/styles.css': 'styles.css',
    '/script.js': 'script.js',
    '/Products.html': 'Products.html',
    '/Home.html': 'Home.html',
    '/About.html': 'About.html',
    '/Contact.html': 'Contact.html',
    '/camera.png': 'camera.png',
    '/instagram-marketing.png': 'instagram-marketing.png',
    '/youtube-marketing.png': 'youtube-marketing.png',
    '/mobile-shopping.png': 'mobile-shopping.png',
    '/online-analysis.png': 'online-analysis.png',
    '/search-bar.png': 'search-bar.png',
    '/shopping-growth.png': 'shopping-growth.png',
    '/weather-app.png': 'weather-app.png',
    '/website.png': 'website.png',
  };

  const route = routes[req.url];

  if (route) {
    const filePath = path.join(__dirname, route);
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
        console.error(err);
      } else {
        const contentType = getContentType(route);
        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.end(content);
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

function getContentType(route) {
  const extension = path.extname(route).toLowerCase();
  switch (extension) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'application/javascript';
    case '.png':
      return 'image/png';
    default:
      return 'text/plain';
  }
}

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
