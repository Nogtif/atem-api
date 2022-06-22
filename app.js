// REST API for server web
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const animesRoute = require('./routes/animes');

// Set up the server
const PORT = process.env.PORT || 8080;
app.set('port', PORT);

// Connect to the database
mongoose
  .connect('mongodb://localhost/atem')
  .then(() => console.log('DB Connection Successfull!'))
  .catch((error) => console.log(error));

// Retrieve body of request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Fix cors issue
app.use(cors());

// Define the API routes
app.use('/api/animes', animesRoute);

// Start the server
app.listen(PORT, () => console.log('Server listening on port 8080'));

// Exports
module.exports = app;