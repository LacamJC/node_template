const collectionPointService = require("../services/collectionPoint.service")

exports.getCollectionPoint = async (req,res) => {
    try{
        const collectionPoint = await collectionPointService.getAllCollectionPoints()
        res.json(collectionPoint)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}