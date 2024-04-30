const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n');
      const dictionary = {};
      for (let i = 1; i < lines.length; i += 1) {
        const line = lines[i].split(',');
        if (!(line[3] in dictionary)) {
          dictionary[line[3]] = [];
        }
        dictionary[line[3]].push(line[0]);
      }
      resolve(dictionary);
    });
  });
}

module.exports = readDatabase;
