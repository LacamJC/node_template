const {Category} = require("../models/assosiations")

exports.getAllCategories = async () => {
    return await Category.findAll()
}