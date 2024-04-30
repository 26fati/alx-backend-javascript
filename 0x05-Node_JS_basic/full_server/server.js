const express = require('express');

const app = express();
const router = require('./routes/index');

const port = 1245;

app.use('/', router);
app.use('students', router);
app.use('/students/:major', router);

app.listen(port);

export default app;
