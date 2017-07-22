'use strict'
module.exports = (sequelize, DataType) => {
    let Post = sequelize.define("Post", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataType.STRING,
            allowNULL: false
        },
        content: {
            type: DataType.TEXT,
            allowNULL: false
        },
        img:{
            type: DataType.STRING
        },
        description: {
            type: DataType.STRING
        },
        author: {
            type: DataType.INTEGER
        },
        type: {
            type : DataType.STRING
        }
    }, {
            updatedAt: 'updated',
            createdAt: 'created',
            freezeTableName: true
        })
    Post.sync();
    return Post
}