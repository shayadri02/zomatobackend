const mongoose = require('mongoose');
//Initialising the mongoose Schema
const Schema = mongoose.Schema;
//registering the city Schema
const UsersSchema = new Schema({
    email: {
        type: String,
        required: true
    },


    password: {
        type: String,
        required: true
    }



})
module.exports = mongoose.model('Users', UsersSchema, 'Users'); //export the model