const User = require('../models/user');
const db = require('../db/database');

exports.signin = (req, res) => {
    const login = req.body.login;
    const password = req.body.password;

    User.findOneByLogin(login).then(user => {
        const currentUser = user[0];
        if(currentUser.length){
            if(currentUser[0].active){
                if(currentUser[0].attemps>0){
                    if(currentUser[0].password===password){
                        db.execute(`update users set attemps=? where id=?`,[3,currentUser[0].id]);
                        return res.status(201).send({data: {success: true, logged: true, user: currentUser[0]}, message: 'Zalogowano'})
                    }
                    else{
                        db.execute(`update users set attemps=? where id=?`,[currentUser[0].attemps-1,currentUser[0].id]);
                        return res.status(401).send({data: {success: false}, message: `Złe hasło. Pozostało ${currentUser[0].attemps-1} prób`}); 
                    }
                }else{
                    return res.status(401).send({data: {success: false}, message: 'Wykorzystano wszystkie próby. Konto zablokowane.'}); 
                }
            }else{
                return res.status(401).send({data: {success: false}, message: 'Konto zablokowane.'});
            }
            
            
        }
        else{
            return res.status(401).send({data: {success: false}, message: 'Nie ma takiego użytkownika'}); 
        }
    })

}