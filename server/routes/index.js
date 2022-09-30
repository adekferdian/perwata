const router = require("express").Router();
const userRoutes = require("./userRoutes")
const childrenRoutes = require("./childrenRoutes")

router.get("/", (err, res) => {

});
router.use("/users", userRoutes);
router.use("/children", childrenRoutes);

module.exports = router;