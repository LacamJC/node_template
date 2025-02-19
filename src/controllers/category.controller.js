const categoryService = require("../services/category.service")

exports.getCategory = async (req,res) => {
    try{
        const category = await categoryService.getAllCategories()
        res.json(category)
    }   catch(error){
        res.status(500).json({message: error.message})
    }
}