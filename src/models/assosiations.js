const User = require('./User')
const Business = require('./Business')
const CollectionPoint = require('./CollectionPoint')
const Category = require('./Category')


async function syncDatabase() {
    try{
        await User.sync({force:true})
        await Business.sync({force:true})
        await Category.sync({force:true})
        await CollectionPoint.sync({force:true})
        console.log("Tabelas sincronizadas")
    }catch(error){
        console.error("Erro ao sincronizar tabelas: " + error)
    }
}
// syncDatabase()


CollectionPoint.belongsTo(User, { foreignKey: "id_user", as: "user"})
CollectionPoint.belongsTo(Business, { foreignKey: "id_business", as: "business"})
CollectionPoint.belongsTo(Category, { foreignKey: "id_category", as: "category"})

User.hasMany(CollectionPoint, { foreignKey: "id_user", as :"collectionPoints"})
Business.hasMany(CollectionPoint, { foreignKey: "id_business", as :"collectionPoints"})
Category.hasMany(CollectionPoint, { foreignKey: "id_category", as :"collectionPoints"})

module.exports = { User, Business, CollectionPoint, Category}