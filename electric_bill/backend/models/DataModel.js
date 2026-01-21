const mongoose = require('mongoose');

const flexibleSchema = new mongoose.Schema({
    meter_no: {type: String, required: true},
    units: {type: String, required: true},
    amount: {type: String, required: true},
});

const DataModel = mongoose.model('DataModel', flexibleSchema);

module.exports = DataModel;
