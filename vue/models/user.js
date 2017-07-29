'use strict'
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataType) => {
    let User = sequelize.define("User", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataType.STRING,
            allowNULL: false,
            unique: true
        },
        email: {
            type: DataType.STRING,
            allowNULL: false
        },
        displayname: {
            type: DataType.STRING,
            allowNULL: false
        },
        password: {
            type: DataType.STRING,
            allowNULL: false
        }
    }, {
        freezeTableName: true,
    })
    User.sync();
    return User
}