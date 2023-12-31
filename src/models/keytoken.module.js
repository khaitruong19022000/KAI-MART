'use strict'

//key !dmbg install by Mong Snippets for Node.js

const { model, Schema, Types} = require('mongoose')

const DOCUMENT_NAME = 'Key'
const COLLECTION_NAME = 'Keys'

//Declare the Schema of the Mongo model
const keyTokenSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        required: true,
        ref:'Shop'
    },
    privateKey:{
        type: String,
        required: true
    },
    publicKey:{
        type: String,
        required: true
    },
    refreshToken:{
        type: Array,
        default: [],
    }
}, {
    timestamps: true,
    collection: COLLECTION_NAME,
});

module.exports = model(DOCUMENT_NAME, keyTokenSchema);