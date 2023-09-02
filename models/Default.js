const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const defaultSchema = new Schema({
    companyName: String,
    gstin: String,
    address1: String,
    address2: String,
    address3: String,
    mail: String,
    bankName: String,
    bankAccNo: String,
    bankIfsc: String,
    accHolderName: String,
    upiId: String,
    sign: String
})

module.exports = mongoose.model('Default', defaultSchema);