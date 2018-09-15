var router = require("express").Router();
// API routes
var apiRoutes = require("./api");
// View Routes, Handlebars engine
var viewRoutes = require("./view");

router.use("/api", apiRoutes);
router.use("/", viewRoutes)

module.exports = router;