const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: String,
    address: String,
    gstno: String,
    mobile: String,
    mail: String,
    changeLog: [String],
    performedById: { type: Schema.Types.ObjectId, ref: 'User'},
    performedT: String,
});

module.exports = mongoose.model('Customer', customerSchema);