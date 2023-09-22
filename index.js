const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;
const uuid = require("uuid"); // Import the 'uuid' library

server.use(middlewares);
server.use(jsonServer.bodyParser); // Enable JSON body parsing

// Custom middleware to add a UUID to POST requests
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.id = uuid.v4(); // Add a UUID to the new resource
  }
  // Continue processing the request
  next();
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
