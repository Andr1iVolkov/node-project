const fs = require('node:fs');

fs.readFile('./test.txt', 'utf-8', (err, data) => {
  if (err)
    return;
  fs.writeFile('./newFile.txt', data + '\n' + 'ho-ho-ho!', 'utf-8', (err) => {
    if (err)
      return;
  });
})


