// Import builtin NodeJS modules to instantiate the service
const https = require("https");
const fs = request("fs");

// Import the express module
const express = require("express");

// Instantiate an Express application
const app = express();
app.set('port', 3000);
const server = https.createServer(app);