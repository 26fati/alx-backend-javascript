const http = require('http');
const countStudents = require('./3-read_file_async')

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    }
    if (req.url === '/students') {
        res.write('This is the list of our students\n');
        try {
            countStudents(process.argv[2].toString()).then((output)=> {
                res.end(output);
            });
            
        } catch (error) {
            res.end(error);
        }

    }
    
})

app.listen(port, hostname, () => {

});