const express = require('express');
const router = express.Router();
const { Blog } = require('../controllers/Blog');

router.get('/', Blog.GetBlog);
router.get('/full-blog', Blog.ReadFullBlog);
router.post('/add-comment', Blog.AddComment);
module.exports = router;
