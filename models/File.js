const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const fileSchema = new Schema({
    type: String,
    base64: String
})

module.exports = mongoose.model("File", fileSchema);