// Main starting point of the application

'use strict';

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./config/router');
const cors = require('cors');
//const mongoose = require('mongoose');

// DB Setup
//mongoose.connect('mongodb://localhost:auth/auth');

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use(express.static('www'));
router(app);

// Server Setup
const port = process.env.PORT || 8070;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);