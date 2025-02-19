const {CollectionPoint} = require("../models/assosiations")

exports.getAllCollectionPoints = async () => {
    return await CollectionPoint.findAll()
}