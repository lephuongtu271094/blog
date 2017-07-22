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
        displayname: {
            type: DataType.STRING,
            allowNULL: false
        },
        password: {
            type: DataType.STRING,
            allowNULL:false
        }
    }, {
            freezeTableName: true,
            hooks: {
                beforeCreate: (user, op, fn) => {
                    bcrypt.hash(user.password, 10, (err, hash) => {
                        if (err) throw err;
                        user.password = hash;
                        fn(null,user)
                })
            }
        }    
        })
    User.sync();
    return User
}