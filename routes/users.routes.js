const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user.controllers");

router.get("/random", userControllers.pickRandomUser);
router.get("/all", userControllers.allUsers);
router.post("/save", userControllers.addUser);
router.patch("/update/:id", userControllers.updateAnUser);
router.delete("/delete/:id", userControllers.deleteAnUser);

module.exports = router;
