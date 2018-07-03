const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();




// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());


// Routes
//http://localhost:3000/users/signin  
//http://localhost:3000/users/scret

app.use('/users', require('./routes/users'));

// Start the server

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`server listening at ${port}`);