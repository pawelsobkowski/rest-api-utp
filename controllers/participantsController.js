const Participant = require('../models/participants');

exports.addParticipant = async (req, res) => {
    const idEvent = req.body.idEvent;
    const idUser = req.body.idUser;
    const role = req.body.role;
    const food = req.body.food;

    const participant = new Participant(idEvent,idUser,role,food);
    await participant.create();

    return res.status(201).send({ message: 'Pomyślnie zapisano na wydarzenie'});
}