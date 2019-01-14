
/* ### webhook Mock API at jan 14, 2019 , isaac choi
webhook_mock app */

// Dependencies
const request = require('request');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const { mock, yahoo } = require('./router');

const app = express();
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use('/', [mock, yahoo]);

module.exports = () => {
	const port = 3057;
	http.createServer(app).listen(port, (e) => {
		console.log(`start localhost server is port ${port}`);
	});
};