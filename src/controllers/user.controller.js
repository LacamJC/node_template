const userService = require("../services/user.service")

exports.getAllUsers = async (req,res) => {
    try {
        const users = await userService.getAllUsers()
        res.json(users)
    } catch (error){
        res.status(500).json({message: error.message})
    }
}

