const router = require("express").Router();
const UserController = require("../controllers/UserController");

router.get("/", UserController.findAll);
router.get("/:id", UserController.findOne);
router.post("/", UserController.addUser);
router.put("/:id", UserController.editUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;