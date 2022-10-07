import config from './config/index.js';
import express from 'express';
import path from 'path';

const app = express();
app.use(express.static(path.join(process.cwd(), 'assets')));
app.set('view-engine', 'ejs');
app.set('views', './views');

app.listen(config.port, () => console.log(`Listening on port ${config.port}`))