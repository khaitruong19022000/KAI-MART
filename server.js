const app = require("./src/app");
const {app: {port}} = require('./src/configs/config.mongodb')
const PORT = port || 3000
const server = app.listen(PORT, () => {
    console.log(`WSV ecommerce start with ${PORT}`);
})

// process.on("SIGINT", () => {
//     server.close( () => {
//         console.log('Exit Server Express');
//     })
// })