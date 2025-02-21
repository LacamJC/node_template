const express = require("express")
const userController = require("../controllers/user.controller")
const router = express.Router()

router.get("/", userController.getUser)

// router.post("/", userController.createUser)
router.post("/", userController.createUser)
router.put("/", userController.updateUser)

module.exports = router