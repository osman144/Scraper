var router = require("express").Router();
var fetchRoutes = require('./fetch');
var noteRoutes = require('./notesRoute');
var articleRoute = require('./articlesRoute');

router.use('/fetch', fetchRoutes);
router.use('/notes', noteRoutes);
router.use('/articles', articleRoute);

module.exports = router;