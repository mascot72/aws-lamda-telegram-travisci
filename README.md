# aws-lamda-telegram-travisci
```
aws lambda example
```
[jan 14, 2018]

--------------
list조회기능-ok
db 조회기능 
weather I/F

const app = express();
const weather_json_mock = {};
app.post(‘/weather_json’, (req, res) => {
	res.json(weather_json_mock);
});