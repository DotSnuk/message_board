const { Router } = require('express');
const router = Router();

const posts = [
  { text: 'Hello there', user: 'Snuk', added: new Date() },
  {
    text: 'Hello to you to!',
    user: 'Diana',
    added: new Date(),
  },
];

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/new', (req, res) => {
  res.send(req.body);
});

router.get('/', (req, res) => {
  res.render('index', { posts });
});

module.exports = router;
