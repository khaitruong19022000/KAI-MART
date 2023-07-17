'use strict'

const mongoose = require('mongoose')
const {db: {username, password, namedb}} = require('../configs/config.mongodb')
// const { countConnect } = require('../helper/check.connect')

const connectString = `mongodb+srv://${username}:${password}@cluster0.wevv41s.mongodb.net/${namedb}`

class Database {

    constructor(){
        this.connect()
    }
    //connect
    connect(type = 'mongdb'){
        if(1 === 1){
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true})
        }

        mongoose.connect(connectString)
        .then( _ => console.log(`Connected to Mongoose Success ${namedb}`))
        .catch( err => console.log('Error Connect!'))
    }
    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database();
        }

        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance()

module.exports = instanceMongodb