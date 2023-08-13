'use strict'

const express = require('express')
const { apiKey } = require('../auth/checkAuth')
const router = express.Router()

// check apiKey
router.use(apiKey)

// check permission

router.use('/v1/api', require('./access'))
// router.get('', (req, res, next) => {
//     const strCompress = "Hello Fantipjs"
//     return res.status(200).json({
//         message: 'Welcome come',
//         metadata: strCompress,
//     })
// })

module.exports = router