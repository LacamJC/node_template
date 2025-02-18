const express = require("express")
const userController = require("../controllers/user.controller")
const router = express.Router()

router.get("/", userController.getUser)

// router.post("/", userController.createUser)
router.post("/", userController.createUser)

module.exports = router