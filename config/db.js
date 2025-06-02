const mongoose = require("mongoose");
const connection = mongoose.createConnection('mongodb://127.0.0.1:27017').on('open', () => {
    console.log("connected to database");
}).on('error', () => {
    console.log("error connecting to database");
});

module.exports = connection;