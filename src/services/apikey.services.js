'use strict';

const apikeyModel = require('../models/apikey.model');

const findById = async ( key ) => {
    const objkey = await apikeyModel.findOne({ key, status: true}).lean()
    return objkey
}

module.exports = {
    findById
}

