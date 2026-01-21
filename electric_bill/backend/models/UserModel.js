const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    meter_no: {type: String, required: true},
    phone: {type: Number, required: true},
    mail: {type: String, required: true},
    address: {type: String, required: true},
    pincode: {type: Number, required: true},
    type: {type: String, required: true},
});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = UserModel;
