'use strict';

const HEADER = {
    API_KEY: 'x-api-key',
    AUTHORIZATION: 'authorization'
}

const { findById } = require('../services/apikey.services'); 

const apiKey = async (req, res, next) => {
    try {
        const key = req.headers[HEADER.API_KEY]?.toString();
        if(!key){
            return res.status(403).json({
                message: 'Fobidden Error'
            })
        }
        // check objKey
        const objKey = await findById(key)
        if(!objKey){
            return res.status(403).json({
                message: 'Forbidden Error'
            })
        }
        req.objkey = objKey
        return next()
    } catch (error) {
        
    }
}

module.exports = {
    apiKey
}