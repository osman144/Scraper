var router = require("express").Router();
var articleController = require("../../controllers/articleMethods");

router.get("/", articleController.findAll);
router.delete("/", articleController.removeAllArticlesDB);
router.delete("/:id", articleController.removeOneArticleDB);
