const User = require('../models/user');

exports.users = async (req, res, next) => {
    User.getUsers().then(([result]) => {
        res.status(201).json({
            users: result
        });
    })
    .catch(err => console.log(err));
}