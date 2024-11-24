const express = require("express");
const router = express.Router();
const Post = require("../data/post");

const usersController = require("../controllers/users");

// display things
router.get("/", usersController.getAll);
router.get("/:id", usersController.getSingle);

// change things
router.post("/", usersController.addSingle);
router.put("/:id", usersController.updateSingle);

// delete things

router.delete("/:id", usersController.deleteSingle);
module.exports = router;
