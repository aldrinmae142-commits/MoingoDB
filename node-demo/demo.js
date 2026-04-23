const fs = require('fs');

const content = 'Hello from Node.js! This file was created using the built-in fs module.';

fs.writeFile('message.txt', content, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('message.txt created successfully.');
});
