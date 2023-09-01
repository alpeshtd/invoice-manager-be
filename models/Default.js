const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const defaultSchema = new Schema({
    companyName: String,
    gstin: String,
    address1: String,
    address2: String,
    address3: String,
    mail: String,
    mobile: String,
})

module.exports = mongoose.model('Default', defaultSchema);