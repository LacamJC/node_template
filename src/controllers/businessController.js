const businessService = require("../services/business.service")

exports.getBusiness = async (req,res) => {
    try{
        const business = await businessService.getAllBusiness()
        res.json(business)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}