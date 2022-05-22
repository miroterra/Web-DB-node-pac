const express = require('express');

const db = require('../data/database');

const router = express.Router();

router.get('/', function (req, res) {
  res.redirect('/posts');
});

router.get('/posts', function (req, res) {
  res.render('posts-list');
});

router.get('/new-post', async function (req, res) {
  // 비구조화
  const [authors] = await db.query('SELECT * FROM authors');
  res.render('create-post', { authors: authors });
});

router.post('/posts', function (req, res) {
  req.body;
  db.query('INSERT INTO posts (title, summary, body, author_id) VALUES (?)', []);
});

module.exports = router;
