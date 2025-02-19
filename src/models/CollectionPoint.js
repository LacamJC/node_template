const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")



const CollectionPoint = sequelize.define("CollectionPoint", { 
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey : true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    business_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    cep: {
        type: DataTypes.STRING,
        allowNull: false
    },

    score: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
    },

    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    id_business: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    id_category: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})


// CollectionPoint.sync({force:true})
 
module.exports = CollectionPoint