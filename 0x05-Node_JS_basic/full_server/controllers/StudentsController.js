const { readDatabase } = require('../utils')

class StudentsController {
    static getAllStudents(request, response) {
        response.send("This is the list of our students\n")
        try {
            readDatabase(process.argv[2].toString()).then((dictionary) => {
                const keys = Object.keys(dictionary);
                keys.sort()
                const output = '';
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    output += `Number of students in ${key}: ${dictionary[key].length}. List: ${dictionary[key].join(', ')}`;
                    if (i !== keys.length - 1) {
                        output += '\n'; 
                    }
                }
                response.status(200).send(output)
            }) 
        }
        catch (error) {
            response.status(500).send(error)
        }
    }
    static getAllStudentsByMajor(request, response) {
        const major = request.params.major;
        if (!['CS', 'SWE'].includes(major)) {
            response.status(500).send("Major parameter must be CS or SWE\n");
        }
        try {
            readDatabase(process.argv[2].toString()).then((dictionary) => {
                const keys = Object.keys(dictionary);
                keys.sort()
                const output = '';
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    if (key === major) {
                        output += `Number of students in ${key}: ${dictionary[key].length}. List: ${dictionary[key].join(', ')}`;
                    }
                }
                response.status(200).send(output)
            })
        }
        catch (error) {
            response.status(500).send(error)
        }

    }

}

module.exports = StudentsController