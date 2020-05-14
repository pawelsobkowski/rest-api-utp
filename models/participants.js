const db = require('../db/database.js');
module.exports = class Participant{
    constructor(idEvent, idUser, role, food){
        this.idEvent = idEvent;
        this.idUser = idUser;
        this.role = role;
        this.food = food;
    }

    create(){
        return db.execute(`insert into participants (id_event,id_user,role,food) values (?,?,?,?)`,[this.idEvent,this.idUser,this.role,this.food]);
    }

    static getParticipants(){
        return db.execute(`select * from events`);
    }
}