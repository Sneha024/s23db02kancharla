var express = require('express');
const book_controllers= require('../controllers/book');
var router = express.Router();

/* GET costumes */
router.get('/', book_controllers.book_view_all_Page );
module.exports = router;
/* GET detail book page */
router.get('/detail', book_controllers.book_view_one_Page);
/* GET create book page */
router.get('/create', book_controllers.book_create_Page);
/* GET create update page */
router.get('/update', book_controllers.book_update_Page);
/* GET delete book page */
router.get('/delete', book_controllers.book_delete_Page);
