const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n');
      const number = lines.length - 1;
      let output = `number of students: ${number}\n`;
      const dictionary = {};
      for (let i = 1; i < lines.length; i += 1) {
        const line = lines[i].split(',');
        if (!(line[3] in dictionary)) {
          dictionary[line[3]] = [];
        }
        dictionary[line[3]].push(line[0]);
      }
      const keys = Object.keys(dictionary);
      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        output += `Number of students in ${key}: ${dictionary[key].length}. List: ${dictionary[key].join(', ')}`;
        if (i !== keys.length - 1) {
          output += '\n'; // Add newline only if it's not the last key
        }
      }
      resolve(output);
      console.log(output);
    });
  });
}
module.exports = countStudents;
