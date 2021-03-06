const  express = require('express');
const path = require('path');
const  cookieParser = require('cookie-parser'); // My project does not require cookies
const  bodyParser = require('body-parser');

const surprise = require('./routes/surpriseRouter');
const statsRouter = require('./routes/statsRouter');

const port = 3000;

const  app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/surprise', surprise);

app.use('/stats',statsRouter);


app.listen(port, () => console.log(`listening at http://localhost:${port}`));