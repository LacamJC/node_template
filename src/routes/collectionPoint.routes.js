const express = require("express")
const collectionPointController = require("../controllers/collectionPointController")

const router = express.Router()

router.get("/", collectionPointController.getCollectionPoint)

module.exports = router
