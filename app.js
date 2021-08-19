const  express = require('express');
const path = require('path');
const  cookieParser = require('cookie-parser'); // dont need cokie to my project
const  bodyParser = require('body-parser');

const  surprise = require('./routes/surpriseController');
const port = 3000;

const  app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/surprise', surprise);


app.listen(port, () => console.log(`listening at http://localhost:${port}`));