'use strict';

const path = require('path');
const express = require('express');
var expressStaticGzip = require("express-static-gzip");
var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat lorem sed porta mattis. Phasellus viverra, dui ut ultricies aliquam, ipsum nulla convallis dolor, tempor lobortis mauris nisl id leo. Duis sagittis eros tellus';

/**
 * Installs routes that serve production-bundled client-side assets.
 * It is set up to allow for HTML5 mode routing (404 -> /dist/index.html).
 * This should be the last router in your express server's chain.
 */
module.exports = (app) => {
	let id = 0;
  const distPath = path.join(__dirname, '../build');
  const indexFileName = 'index.html';
  app.use("/", expressStaticGzip(distPath,{ enableBrotli: true}));
  app.get('/', function(req, res) {
       res.sendFile(path.join(distPath, indexFileName));
     });
  app.get('/data',(req, res) => {
  	let dataArray = [];
  	for (let i = 0; i< 13; i++) {
  		dataArray.push(getData(id++));
  	}
  	res.send(dataArray);
  });
  function getData(id) {
  	return {
  		id: id,
  		text: lorem.substr(0, Math.random() * 100)
  	}
  }
};