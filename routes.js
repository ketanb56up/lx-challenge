const express = require("express");
const controller = require("./controllers");

const router = express.Router();

router.get("/reverse-words", controller.reverseWords);
router.get("/sort-words", controller.sortWords);

module.exports = router;
