const mongoose = require('mongoose');
//Initialising the mongoose Schema
const Schema = mongoose.Schema;
//registering the city Schema
const RestaurentsSchema = new Schema({



    location_id: {
        type: Number,
        required: true
    },
    cuisine_id: {
        type: Number,
        required: true
    },
    mealtype_id
        : {
        type: Number,
        required: true
    },
    min_price: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    },
    // city_id: {
    //     type: String,
    //     required: true
    // },
    // location_id: {
    //     type: String,
    //     required: true
    // },
    city: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Restaurents', RestaurentsSchema, 'Restaurents'); //export the model