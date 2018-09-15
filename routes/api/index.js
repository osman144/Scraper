let router = require("express").Router();
let fetchRoutes = require('./fetch');
let noteRoutes = require('./notesRoute');
let articleRoute = require('./articlesRoute');

router.use('/fetch', fetchRoutes);
router.use('/notes', noteRoutes);
router.use('/articles', articleRoute);

module.exports = router;