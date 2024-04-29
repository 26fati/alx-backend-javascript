const express = require('express');
const countStudents = require('./3-read_file_async')

const port = 1245;

const app = express();

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
})

app.get('/students', (req, res) => {
    res.write('This is the list of our students\n');
    try {
        countStudents(process.argv[2].toString()).then((output)=> {
            res.end(output);
        });
        
    } catch (error) {
        res.end(error);
    }
})

app.listen(port, () => {

});