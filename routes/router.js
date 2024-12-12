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
  posts.push({
    text: req.body.postText,
    user: req.body.username,
    added: new Date(),
  });
  res.redirect('/');
});

router.get('/', (req, res) => {
  res.render('index', { posts });
});

module.exports = router;
