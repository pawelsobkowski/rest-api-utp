const db = require('../db/database.js');
module.exports = class Event{
    constructor(name, description, date){
        this.name = name;
        this.description = description;
        this.date = date;
        
    }

    create(){
        return db.execute(`insert into events (name,description,date) values (?,?,?)`,[this.name,this.description,this.date]);
    }

    static getEvents(){
        return db.execute(`select * from events`);
    }
}