// lib/app.ts
import * as rootController from './controllers/index';
import * as discordController from './controllers/discord';
import * as redditController from './controllers/reddit';
import * as wikiController from './controllers/wiki';
import express = require('express');

// Create a new express application instance
const app: express.Application = express();

// express configuration
app.set('port', (process.env.PORT || 3000));

app.get('/', rootController.index);
app.get('/discord*', discordController.router);
app.get('/reddit*', redditController.router);
app.get('/wiki*', wikiController.router);

app.listen(app.get('port'), function() {
	console.log('Example app listening on port 3000!');
});
