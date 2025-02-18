const userService = require("../services/user.service")

// exports.getAllUsers = async (req,res) => {
//     try {
//         const users = await userService.getAllUsers()
//         res.json(users)
//     } catch (error){
//         res.status(500).json({message: error.message})
//     }
// }

// exports.getUserById = async (req,res) => {
//     try {
//         const user_by_id = await userService.getUserById(req.query)
//         res.json(user_by_id)
//     } catch(err) {
//         res.status(500).json({message: error.message})
//     }
// }

exports.getUser = async (req,res) => {
    try {
        const userId = req.query.id 
        if(userId)
        {
            const user = await userService.getUserById(userId)
            res.json(user)
        }else{
            const users = await userService.getAllUsers()
            res.json(users)
        }
    } catch(err) {
        res.status(500).json({message: error.message})
    }
}

exports.createUser = async (req,res) => {
    try{
        const new_user = await userService.createUser(req.body)
        res.json(new_user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

