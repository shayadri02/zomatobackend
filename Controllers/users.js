const { response } = require('express');
const Users = require('../Models/users');
exports.CheckUserDetails = (req, res) => {
    const { user_id, password } = req.body;
    Users.find(
        {
            email: user_id,
            password: password
        }
    ).then(response => {
        if (response.length > 0) {
            res.status(200).json({ message: "User login successfully", isAuthenticated: true, user: response });
        } else {
            res.status(200).json({ message: "User login unsuccessfully", isAuthenticated: false, user: response });
        }
    }).catch()
}