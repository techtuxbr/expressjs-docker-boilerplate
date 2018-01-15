const mongoose = require("mongoose")

mongoose.connect("mongodb://mongo:27017/expressjs-dev", {
    useMongoClient: true
}).then(() => {
    console.log("MongodDB: Connected")
}).catch(err => {
    console.log("Error while try connect to MongoDB:" + err)
})

module.exports = mongoose