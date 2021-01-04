const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('we are on users');
})

router.get('/userko', (req, res) => {
    res.send('we are on userko');
})

module.exports = router;