const express = require('express');
const app = express();
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const formRouter = require('./routes/formRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/new', formRouter);
app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening in on port ${PORT}`));
