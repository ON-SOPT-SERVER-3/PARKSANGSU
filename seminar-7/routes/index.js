const express = require('express');
const router = express.Router();

router.use('/post', require('./post'));
router.use('/banner', require('./banner'));
router.use('/multer', require('./multer'));

router.get('/', function(req, res) {
  res.render('index', { title: "Express" })
})

module.exports = router;
