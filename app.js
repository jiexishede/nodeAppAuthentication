const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

// Middlewares


// Routes



// Start the server

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`server listening at ${port}`);