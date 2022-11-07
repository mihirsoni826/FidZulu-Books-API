// import
const express = require("express");
const bodyParser = require("body-parser");
const colors = require("colors");


// express app
const app = express();

// middleware
app.use(bodyParser.json());

// import routes
const bookRoute = require('./route/books.route');

// setup route
app.use('/api/v1/books', bookRoute)

// setup server
const PORT = 3032;
app.listen(PORT, () => {
  console.log(
    `server is running on port 3032`.yellow.bold
  );
});

// handle unhandled promises rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${ err.message }`.red)
    server.close(()=> process.exit(1))
})