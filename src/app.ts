// lib/app.ts
import express = require('express');

// Create a new express application instance
const app: express.Application = express();

// express configuration
app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(app.get('port'), function () {
	console.log('Example app listening on port 3000!');
});
