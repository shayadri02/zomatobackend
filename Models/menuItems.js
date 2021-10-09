const mongoose = require('mongoose');
//Initialising the mongoose Schema
const Schema = mongoose.Schema;
//registering the city Schema
const ItemsSchema = new Schema({



    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Items', ItemsSchema, 'Items'); //export the model