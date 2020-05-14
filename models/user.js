const db = require('../db/database.js');
module.exports = class User{
    constructor(firstName,lastName,position,gender,email,login,password,active,registrationDate,attemps){
        this.fistName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.gender = gender;
        this.email = email;
        this.login = login;
        this.password = password;
        this.active = active;
        this.registrationDate = registrationDate;
        this.attemps = attemps;
    }

    create(){
        return db.execute(`insert into users (firstName, lastName, position, gender, email, login, password, active, registrationDate, attemps) values (?,?,?,?,?,?,?,?,?,?)`,[this.fistName,this.lastName,this.position,this.gender,this.email,this.login,this.password,this.active,this.registrationDate, this.attemps]);
    }

    static findOneByLogin(login){
        return db.execute(`select * from users where login=?`,[login]);
    }

    static getUsers(){
        return db.execute(`select * from users`);
    }
}