const { response } = require('express');
const Mealtypes = require('../Models/mealtypes');


exports.getMealtypes = (req, res) => {
    Mealtypes.find().then(
        response => {
            res.status(200).json({ message: "Mealtypes Fetched Succesfully", mealtypes: response })
        }
    ).catch(
        err => {
            res.status(500).json({ message: "Error", error: err })
        }
    )


};
