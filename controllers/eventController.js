const Event = require('../models/event');

exports.addEvent = async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const date = req.body.date;

    const event = new Event(name,description,date);
    await event.create();

    return res.status(201).send({ message: 'Created'});
}

exports.events = async (req, res, next) => {
    Event.getEvents().then(([result]) => {
        res.status(201).json({
            events: result
        });
    })
    .catch(err => console.log(err));
}

