# aws-lamda-telegram-travisci
```
aws lambda example
```
[jan 20, 2018]
#### postgreSql
docker postgres
```
docker run  -it  --name postgreSql \
-d -p 5432:5432 \
-e POSTGRES_DB=todo \
-e POSTGRES_USER=Isaac \
-e POSTGRES_PASSWORD=1234 \
 postgres
```

[jan 14, 2018]

--------------
list조회기능-ok
db 조회기능 
weather I/F
```
const app = express();
const weather_json_mock = {};
app.post(‘/weather_json’, (req, res) => {
	res.json(weather_json_mock);
});
```