const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    } else {
      const lines = data.split('\n');
      const number = lines.length - 1;
      console.log(`number of students: ${number}`);
      const dictionary = {};
      for (let i = 1; i < lines.length; i += 1) {
        const line = lines[i].split(',');
        if (!(line[3] in dictionary)) {
          dictionary[line[3]] = [];
        }
        dictionary[line[3]].push(line[0]);
      }
      Object.keys(dictionary).forEach((key) => {
        console.log(`NumbePr of students in ${key}: ${dictionary[key].length}. List: ${dictionary[key].join(', ')}`);
      });
    }
  });
}
module.exports = countStudents;
