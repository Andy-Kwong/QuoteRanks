let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let AuthorSchema = new mongoose.Schema({
    name: {required: true, type: String, minlength: [3, "Author name needs to be greater than 3 characters!"]},
    quotes: [{type: Schema.Types.ObjectId, ref: 'Quote'}]
}, {timestamps: true});

module.exports = mongoose.model('Author', AuthorSchema);
