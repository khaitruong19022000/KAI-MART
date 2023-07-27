'use strict'

const keyTokenModule = require("../models/keytoken.module")

class KeyTokenService {
    static createKeyToken = async ({ userId, publicKey, privateKey}) => {
        try {
            // const publicKeyString = publicKey.toString()
            const tokens = await keyTokenModule.create({
                user: userId,
                publicKey,
                privateKey
            })

            return tokens ? tokens.publicKey : null
        } catch (error) {
            return error
        }
    }
}

module.exports = KeyTokenService