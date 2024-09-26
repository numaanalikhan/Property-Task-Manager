const express = require("express");
const router = express.Router();
const taskCtrl = require("../controller/taskCtrl");

router.post("/add",taskCtrl.addTask);
router.get("/",taskCtrl.getTask);
router.patch("/:taskId",taskCtrl.updateStatus);
router.delete("/:id",taskCtrl.deleteTask)

module.exports = router;