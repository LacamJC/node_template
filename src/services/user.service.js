const {User} = require("../models/assosiations")

exports.getAllUsers = async () => {
    return await User.findAll()
}

exports.getUserById = async (id) => {
    return await User.findOne({where : {id : id}})
}

exports.createUser = async (data) => {
    const {name, password} = data
    try{
        const newUser = await User.create({
            name : name,
            password: password
        })
        return newUser
    }catch(err){
        console.log("Erro ao criar usuario: " + err)
        throw new Error("Erro ao criar usuario")
    }

 }