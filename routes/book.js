var express = require('express');
const book_controllers= require('../controllers/book');
var router = express.Router();

/* GET costumes */
router.get('/', book_controllers.book_view_all_Page );
module.exports = router;
/* GET detail book page */
router.get('/detail', book_controllers.book_view_one_Page);
