const express = require("express")
const userRoutes = require("./user.routes")
const categoryRoutes = require("./category.routes")
const businessRoutes = require("./business.route")
const collectionPointRoutes = require("./collectionPoint.routes")
const router = express.Router()

router.use("/user", userRoutes)
router.use("/category", categoryRoutes)
router.use("/business", businessRoutes)
router.use("/collectionPoint", collectionPointRoutes)

module.exports = router