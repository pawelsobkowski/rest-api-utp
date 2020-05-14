const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const db = require('./db/database');
const signupRoute = require('./routes/signup');
const signinRoute = require('./routes/signin');
const eventsRoute = require('./routes/event');
const participantsRoute = require('./routes/participant');
const usersRoute = require('./routes/users');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

app.use(signupRoute);
app.use(signinRoute);
app.use(eventsRoute);
app.use(participantsRoute);
app.use(usersRoute);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));