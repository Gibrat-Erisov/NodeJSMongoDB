const mongoose = require('mongoose');

const objectSchema = new mongoose.Schema({
    name: String,
    idCompany: String
});
module.exports = mongoose.model('Object', objectSchema);
