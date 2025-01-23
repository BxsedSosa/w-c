const express = require("express");
const app = express();
const port = 8000;

// Start the app.
app.listen(port, function () {
  console.log("App listening on port: " + port);
});

// Basic request logger.
app.use(function logRequest(request, response, next) {
  console.log(`${request.method} ${request.url}`);
  next();
});

// Normalize urls.
app.use(function normalizeUrl(request, response, next) {
  if (request.url[request.url.length - 1] !== "/") {
    request.url = request.url + "/";
  }
  next();
});

// Remove 'X-Powered-By' to make it harder for
// hackers to know we're using Express.
app.use(function removeXPoweredByHeader(request, response, next) {
  response.removeHeader("X-Powered-By");
  next();
});

// Route handler for '/'.
app.use(function homeHandler(request, response, next) {
  if (request.url === "/") {
    const HTML = "<h1>Welcome to the site!</h1>";
    response.send(HTML);
  } else {
    next();
  }
});

// Route handler for '/request-inspector/'.
// It should display details about the incoming request,
// similar to how curl works with the --verbose flag.

/**
 * TODO: Generate requestLine and headers dynamically
 * based on incoming request (initially prototyped with
 * hardcoded data so that I could work on on formatting
 * and styling the page as as separate task).
 */
app.use(function requestInspectorHandler(request, response, next) {
  if (request.url === "/request-inspector/") {
    const requestLine = "GET /request-inspector/ HTTP/1.1";
    const headers = [
      "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Encoding: gzip, deflate",
      "Accept-Language: en-US,en;q=0.9",
      "Connection: keep-alive",
      "Host: localhost:8000",
      "Sec-Fetch-Dest: document",
      "Sec-Fetch-Mode: navigate",
      "Sec-Fetch-Site: none",
    ];
    const headersWithNewlines = headers.join("\n");
    response.send(`
      <body style="color: white; background: black;">
        <pre>${requestLine}\n${headersWithNewlines}</pre>
      </body>
    `);
  } else {
    next();
  }
});

app.use(function notFoundHandler(request, response, next) {
  response.status(404);
  response.send(`
    <h1>404</h1>
    <p>We couldn't find the page you're looking for :(</p>
  `);
});
