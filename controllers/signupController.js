const User = require('../models/user');
const { validationResult } = require('express-validator');

exports.signupStep1 = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({ message: 'Validation failed!', errors: errors.array() });
    }

    res.status(200).json({
        success: true,
    });
}

exports.signup = async (req, res) => {
    const errors = validationResult(req);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const position = req.body.position;
    const gender = req.body.gender;
    const email = req.body.email;
    const login = req.body.login;
    const password = req.body.password;
    const active = true;
    let registrationDate = '';
    const attemps = 3;

    if(!errors.isEmpty()){
        return res.status(422).json({ message: 'Validation failed!', errors: errors.array() });
    }

    const date = new Date();
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    registrationDate = `${date.getFullYear()}-${day}-${month}`;

    const user = new User(firstName,lastName,position,gender,email,login,password,active,registrationDate,attemps);
    await user.create();

    return res.status(201).send({ message: 'Created'});
}