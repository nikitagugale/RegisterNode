
const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const TransactionSchema = new mongoose.Schema({
    transactionhash: {
        type: String,
        required: true,
        unique: true,
    },
    
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
  
  
});

TransactionSchema.plugin(uniqueValidator);
const transaction = mongoose.model("transaction", TransactionSchema);
module.exports = transaction;



















   