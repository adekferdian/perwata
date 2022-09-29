const router = require("express").Router();
const ChildrenController = require("../controllers/ChildrenController");

router.get("/", ChildrenController.findAll);
router.get("/:id", ChildrenController.findOne);
router.post("/", ChildrenController.addUser);
router.put("/:id", ChildrenController.editUser);
router.delete("/:id", ChildrenController.deleteUser);

module.exports = router;