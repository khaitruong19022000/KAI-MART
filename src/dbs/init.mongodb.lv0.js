'use strict'

const mongoose = require('mongoose')

// const connectString = `mongodb+srv://khaitruong190220:khaitruong190220@cluster0.wevv41s.mongodb.net/KAI-MART`
const connectString = `mongodb://localhost:27017/KAI-MART`

mongoose.connect(connectString)
.then( _ => console.log('Connected to Mongoose Success'))
.catch( err => console.log('Error Connect!'))

//dev
if(1 === 1){
    mongoose.set('debug', true)
    mongoose.set('debug', { color: true})
}

module.exports = mongoose