const express = require("express");
const router = express.Router();
const postController = require("../../Controller/postController/postController");

router.post("/add", postController.postTask);

module.exports = router;
