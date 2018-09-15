let router = require("express").Router();
// API routes
let apiRoutes = require("./api");
// View Routes, Handlebars engine
let viewRoutes = require("./view");

router.use("/api", apiRoutes);
router.use("/", viewRoutes)

module.exports = router;