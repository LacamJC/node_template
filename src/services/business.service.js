const {Business} = require("../models/assosiations")

exports.getAllBusiness = async () => {
    return await Business.findAll()
}