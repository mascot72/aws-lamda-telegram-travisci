
/* ### webhook Mock API at jan 14, 2019 , isaac choi
webhook_mock app */

// Dependencies
const request = require('request');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const weather_json = {"location":{"city":"Gwangju","region":" Gwangju","country":"South Korea","lat":35.15007,"long":126.833847,"timezone_id":"Asia/Seoul"},"current_observation":{"wind":{"chill":-2,"direction":90,"speed":2.0},"atmosphere":{"humidity":94,"visibility":11.6,"pressure":1012.0,"rising":0},"astronomy":{"sunrise":"7:41 am","sunset":"5:44 pm"},"condition":{"text":"Cloudy","code":26,"temperature":-2},"pubDate":1547496000},"forecasts":[{"day":"Tue","date":1547478000,"low":-3,"high":7,"text":"MostlyCloudy","code":28},{"day":"Wed","date":1547564400,"low":-5,"high":1,"text":"Partly Cloudy","code":30},{"day":"Thu","date":1547650800,"low":-3,"high":6,"text":"Partly Cloudy","code":30},{"day":"Fri","date":1547737200,"low":-4,"high":8,"text":"Partly Cloudy","code":30},{"day":"Sat","date":1547823600,"low":-5,"high":8,"text":"Scattered Showers","code":39},{"day":"Sun","date":1547910000,"low":-3,"high":3,"text":"Scattered Showers","code":39},{"day":"Mon","date":1547996400,"low":-5,"high":5,"text":"Partly Cloudy","code":30},{"day":"Tue","date":1548082800,"low":-3,"high":7,"text":"Mostly Sunny","code":34},{"day":"Wed","date":1548169200,"low":-3,"high":8,"text":"Mostly Sunny","code":34},{"day":"Thu","date":1548255600,"low":-4,"high":6,"text":"Mostly Sunny","code":34}]};

const body = () => {
	return new Promise((resolve, reject) => {
		request({
			url: 'request_data.url',
			method: 'post',
			form: 'form'
		}, function (error, response, body) {
			// Process your data here
			console.log('response:', response.statusCode);
			resolve(body);
		});
	});
};

const router = express.Router();
// app.use(bodyParser.urlencoded({
// 	extended: true
// }));
// app.use(bodyParser.json());

router.get('/weather', (req, res) => {
	res.json(weather_json);
});
router.get('/mock', (req, res) => {
	body()
		.then(data => {
			// console.log('body:', dta);
			res.json(data);
		})
		.catch(err => {
			console.log(err);
			res.status(500).send(err);
		});
});

module.exports = {
	mock : router,
	// const port = 3057;
	// http.createServer(app).listen(port, (e) => {
	// 	console.log(`start localhost server is port ${port}`);
	// });
};