let router = require("express").Router();
let articleController = require("../../controllers/articleMethods");

router.get("/", articleController.findAll);
router.deleteOne("/:id", articleController.removeOneArticleDB);
router.deleteAll("/", articleController.removeAllArticlesDB);

