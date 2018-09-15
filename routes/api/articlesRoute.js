let router = require("express").Router();
let articleController = require("../../controllers/articleMethods");

router.get("/", articleController.findAll);
router.delete("/:id", articleController.removeOneArticleDB);
router.delete("/", articleController.removeAllArticlesDB);

module.exports = router;