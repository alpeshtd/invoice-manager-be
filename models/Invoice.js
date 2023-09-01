const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    companyName: String,
    gstin: String,
    address1: String,
    address2: String,
    address3: String,
    mail: String,
    mobile: String,
    customerId: [{ type: Schema.Types.ObjectId, ref: 'Customer'}],
    clientName: String,
    clientAddress: String,
    clientGstin: String,
    metaInvoiceNo: String,
    metaDate: String,
    items: [{
        description: String,
        unit: {
            label: String,
            id: String,
            value: String,
        },
        qty: Number,
        rate: Number,
        amount: Number,
    }]
})

module.exports = mongoose.model('Invoice', invoiceSchema);