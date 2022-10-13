import config from './config/index.js';
import express from 'express';
import path from 'path';
import allRoutes from './routes/all.routes.js'
import session from 'express-session';
import helmet from 'helmet';
import compression from 'compression';

const app = express();
app.use(helmet());
// app.use(compression());
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'assets')));
app.use(session({
    secret: config.session_secret, 
    resave: false,
    saveUninitialized: true
}));
app.set('view-engine', 'ejs');
app.set('views', './views');

//Routes 
app.use(allRoutes);

app.listen(config.port, () => console.log(`Listening on port ${config.port}`))