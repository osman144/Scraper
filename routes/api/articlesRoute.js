let router = require("express").Router();
let articleController = require("../../controllers/articleMethods");

router.get("/", articleController.findAll);
router.delete("/", articleController.removeAllArticlesDB);
router.delete("/:id", articleController.removeOneArticleDB);
