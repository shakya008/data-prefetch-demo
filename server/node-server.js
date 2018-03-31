'use strict';

const express = require('express');
const winston = require('winston');
const helmet = require('helmet');
const nodeAppServer = require('./node-app-server');

/**
 * Heroku-friendly production http server.
 *
 * Serves your app and allows you to proxy APIs if needed.
 */

const app = express();
const PORT = process.env.PORT || 3000;

// Enable vaWebus security helpers.
app.use(helmet());
// Serve the distributed assets and allow HTML5 mode routing. NB: must be last.
nodeAppServer(app);

// Start up the server.
app.listen(PORT, (err) => {
  if (err) {
    winston.error(err);
    return;
  }

  winston.info(`Listening on port ${PORT}`);
});
