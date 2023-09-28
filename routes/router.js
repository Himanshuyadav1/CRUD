const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

router.get('/edit', (req, res) => {
    res.render('edit', { title: 'Edit Page' });
});

module.exports = router;