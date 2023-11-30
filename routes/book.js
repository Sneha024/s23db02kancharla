var express = require('express');
const book_controllers= require('../controllers/book');
var router = express.Router();
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

/* GET costumes */
router.get('/', book_controllers.book_view_all_Page );
module.exports = router;
/* GET detail book page */
router.get('/detail',secured, book_controllers.book_view_one_Page);
/* GET create book page */
router.get('/create',secured, book_controllers.book_create_Page);
/* GET create update page */
router.get('/update',secured, book_controllers.book_update_Page);
/* GET delete book page */
router.get('/delete',secured, book_controllers.book_delete_Page);
