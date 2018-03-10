let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let QuoteSchema = new mongoose.Schema({
    _author: {type: Schema.Types.ObjectId, ref: 'Author'},
    text: {type: String, required: true},
    votes: {type: Number, required: true}
}, {timestamps: true});

module.exports = mongoose.model('Quotes', QuoteSchema);
