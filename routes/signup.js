const express = require('express');
const { body, validationResult } = require('express-validator');
const signupController = require('../controllers/signupController');
const db = require('../db/database');

const router = express.Router();

router.post('/signup-step1',[
    body('email')
        .isEmail()
        .normalizeEmail()
        .custom(value => {
            return db.execute(`select email from users where email="${value}"`).then(email => {
                if(email[0].length) return Promise.reject('Email jest już w bazie danych.');
            });
        }),
    body('login')
        .custom(value => {
            return db.execute(`select login from users where login="${value}"`).then(login => {
                if(login[0].length) return Promise.reject('Login jest już zajęty.');
            })
        })
    
], signupController.signupStep1);

router.post('/signup',[
    //body('firstName')
    //.matches('/^[A-ZĘÓĄŁŻŹĆŃ]+$/i'),
    //body('lastName')
    //.matches('/^[A-ZĘÓĄŁŻŹĆŃ]+$/i'),
    body('email')
        .isEmail()
        .normalizeEmail()
        .custom(value => {
            return db.execute(`select email from users where email="${value}"`).then(email => {
                if(email[0].length) return Promise.reject('Email jest już w bazie danych.');
            });
        }),
    body('login')
        .custom(value => {
            return db.execute(`select login from users where login="${value}"`).then(login => {
                if(login[0].length) return Promise.reject('Login jest już zajęty.');
            })
        }),
    body('repassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Hasła nie są takie same');
        }   
        return true;
    })
],signupController.signup)

module.exports = router;