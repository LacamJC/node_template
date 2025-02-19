const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")


const Category = sequelize.define("Category", { 
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})



// Category.sync({force:true})

module.exports = Category