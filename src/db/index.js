require('dotenv').config();
const { pg, Pool } = require('pg');

const {POSTGRES_DATABASE, POSTGRES_USER} = process.env;
const config = {
	host:'127.0.0.1',
	database: POSTGRES_DATABASE,
  user: POSTGRES_USER,
  // password: '1234',
  port: 5432,
  // ssl: false,
  max: 2, // set pool max size to 20
  // min: 4, // set min pool size to 4
  idleTimeoutMillis: 1000, // close idle clients after 1 second
	connectionTimeoutMillis: 1000, // r
};
const pool = new Pool(config);

function query(sqlText){
	try  {
		pool.connect((err, client, done) => {
			if (err) {console.log('first error :', err);}
			
			//Table생성
			const create = 'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)';
			//등록
			const insert = 'INSERT INTO items(text, complete) VALUES($1, $2)';
			const values = ['안녕2', true];
			//조회
			const select = 'SELECT * FROM items';
			//수정 
			//삭제 
			client.query(insert, values)
			.then(res => {
				console.log('inserted count: ', res.rowCount);
				return client.query(select);
			})
			.then(res => {
				done();
				console.log('res:', res.rows);
				return res.rows;
			})
			.catch (e => {
				done();
				console.log('inner err:', e);
			});

		});
		// console.log('query:', query);
		// query.on('end', () => { client.end(); });
		
	}
	catch (e) {
		console.log('outter err', e);
	}
	finally {
		console.log('오류가 있어도 실행한다');
	}
}

module.exports = {query};