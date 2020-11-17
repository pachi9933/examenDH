var express = require('express');
var router = express.Router();

const moviesController = require('../controllers/moviesController') 

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'express' });
//});

router.get('/', moviesController.all);


router.get('/detail/:id', moviesController.detail);

router.get('/new', moviesController.new);

router.get('/recomended', moviesController.recomended);

router.get('/create', moviesController.create);
router.post('/create', moviesController.store);

router.get('/update', moviesController.update);
router.post('/update', moviesController.change);

router.get ('/search', moviesController.buscar);
router.post ('/search', moviesController.search);


router.post ('/change', moviesController.change);


//router.post("/delete/:id",moviesController.borrar);



//router.post('/borrar/:id', moviesController.borrar);



module.exports = router;
