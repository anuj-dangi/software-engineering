const mongoose = require('mongoose');

const flexibleSchema = new mongoose.Schema({}, { strict: false });

const DataModel = mongoose.model('DataModel', flexibleSchema);

module.exports = DataModel;
