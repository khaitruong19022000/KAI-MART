'use strict';

// key !dmbg install by Mongo Snippets for Node.js

const  { model, Schema, Types } = require('mongoose'); //Erase if already required

const DOCUMENT_NAME = 'Apikey'
const COLLECTION_NAME = 'Apikeys'

// Declare the Schema of the Mongo model
const apiKeySchema = new Schema({
    key: {
        type: String,
        required: true,
        unique: true,
        // default: function() {
        //     return crypto.randomBytes(20).toString('hex'); // Generates a random 40-character hex string
        // }
    },
    status: {
        type: Boolean,
        default: true,
    },
    permission: {
        type: [String],
        required: true,
        enum: ['0000', '1111', '2222']
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now(),
    //     expires: '30d' // This will automatically delete expired API keys after 30 days
    // }
}, {
    timestamps: true,
    collection: COLLECTION_NAME
});

//Export the model
model.exports = model(DOCUMENT_NAME, apiKeySchema)