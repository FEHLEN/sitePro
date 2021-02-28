const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const {verify} = require('./middleware/auth.js');

const {login, refresh} = require('./controllers/login');
const routeHandler = require('./controllers/produits');
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/login', login);
app.post('/refresh', refresh);

app.get('/produits', verify, routeHandler);
