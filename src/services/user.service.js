const { User } = require("../models/assosiations")

exports.getAllUsers = async () => {
    return await User.findAll()
}

exports.getUserById = async (id) => {
    return await User.findOne({ where: { id: id } })
}

exports.createUser = async (data) => {
    const { name, password } = data
    try {
        const newUser = await User.create({
            name: name,
            password: password
        })
        return newUser
    } catch (err) {
        console.log("Erro ao criar usuario: " + err)
        throw new Error("Erro ao criar usuario")
    }

}

exports.updateUser = async (data) => {
    const data_user = {
        id: data.id,
        name: data.name,
        password: data.password
    }

    try {
        const user = await User.findOne({where: {id : data_user.id}})

        if(!user){
            return {message: "Usuário não encontrado no banco de dados"}
        }

        await User.update({
            name : data_user.name,
            password : data_user.password
        }, {
            where: {id : data_user.id}
        })

        return {message: "Usuário atualizado com sucesso"}
    } catch (error) {
        return {message : "Erro ao atualizar dados do usuário"}
    }
}

