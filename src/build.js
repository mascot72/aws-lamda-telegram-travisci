const fs = require('fs');
fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) throw err;
    try {
        JSON.parse(data);
    } catch (e) {
        throw e;
    }

    console.log('JSON Compile Success');
});