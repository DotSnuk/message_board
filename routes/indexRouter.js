const { Router } = require('express');
const indexRouter = Router();

const posts = [
  { text: 'Hello there', user: 'Snuk', added: new Date() },
  {
    text: 'Hello to you to!',
    user: 'Diana',
    added: new Date(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { posts });
});

module.exports = indexRouter;
