
/* ### yahoo weather API at jan 12, 2019 , isaac choi
[API](https://developer.yahoo.com/weather/documentation.html)
weather app */

// Dependencies
const request = require('request');
const OAuth = require('oauth-1.0a');
const crypto = require('crypto');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

// Initialize
const oauth = OAuth({
	consumer: {
		key: '',
		secret: ''
	},
	signature_method: 'HMAC-SHA1',
	hash_function(base_string, key) {
		return crypto.createHmac('sha1', key)
			.update(base_string)
			.digest('base64');
	}
});

const request_data = {
	url: 'https://weather-ydn-yql.media.yahoo.com/forecastrss',
	method: 'POST',
	data: {
		status: 'Hello Ladies + Gentlemen, a signed OAuth request!',
		u: 'c',
		// w: '2502265',
		location:'광주',
		format: 'json',
	}
};

const body = () => {
	return new Promise((resolve, reject) => {
		const form = oauth.authorize(request_data);
		console.log('form:', form);
		request({
			url: request_data.url,
			method: request_data.method,
			form: form
		}, function (error, response, body) {
			// Process your data here
			console.log('response:', response.statusCode);
			resolve(body);
		});
	});
};

const yahoo = express.Router();
// const app = express();
// app.use(bodyParser.urlencoded({
// 	extended: true
// }));
// app.use(bodyParser.json());

yahoo.get('/yahoo', (req, res) => {
	// console.log('req:', req.params);
	body()
		.then(data => {
			console.log('body:', data);
			res.json(data);
		})
		.catch(err => {
			console.log(err);
			res.status(500).send(err);
		});
});

module.exports = {
	yahoo,
	// const port = 3057;
	// http.createServer(app).listen(port, (e) => {
	// 	console.log(`start localhost server is port ${port}`);
	// });
};