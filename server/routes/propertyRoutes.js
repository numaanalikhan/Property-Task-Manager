const express = require("express");
const router = express.Router();
const propertyCtrl = require("../controller/propertyCtrl");

router.post("/add",propertyCtrl.addProperty);
router.get("/",propertyCtrl.getProperty);

module.exports = router;