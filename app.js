const express = require('express');
const app = express();
const path = require('node:path');
const router = require('./routes/router');
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', router);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening in on port ${PORT}`));
