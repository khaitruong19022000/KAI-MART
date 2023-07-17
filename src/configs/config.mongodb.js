'use strict'

// // level 0
// const config = {
//     app: {
//         port: 3000
//     },
//     db: {
//         username: 'khaitruong190220',
//         password: 'khaitruong190220',
//         namedb: 'KAI-MART'
//     }
// }

// level 1
const dev = {
    app: {
        port: process.env.DEV_APP_PORT
    },
    db: {
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        namedb: process.env.DEV_DB_NAME
    }
}

const pro = {
    app: {
        port: process.env.PRO_APP_PORT
    },
    db: {
        username: process.env.PRO_DB_USERNAME,
        password: process.env.PRO_DB_PASSWORD,
        namedb: process.env.PRO_DB_NAME
    }
}

const config = {dev, pro}
const env = process.env.NODE_ENV || 'dev'

module.exports = config[env]