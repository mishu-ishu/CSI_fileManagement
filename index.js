const fs = require('fs');
const path = require('path');

function listFiles(dirPath) {
  fs.readdir(dirPath, (error, files) => {
    if (error){
      return console.log('Unable to read directory' + error);
    }
    files.forEach((file) => {
      console.log(file);
    });
  });
}

function readFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return console.log('Unable to read file' + err);
    }
    console.log(data);
  });
}

function createFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      return console.log('Unable to create file' + err);
    }
    console.log('File created succesfully');
  });
}

function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      return console.log('Unable to delete file' + err);
    }
    console.log('File deleted successfully');
  });
}

const args = process.argv.slice(2);
const command = args[0];
const targetPath = args[1];
const content = args[2];

switch (command) {
  case 'list':
    listFiles(targetPath || '.');
    break;
  
  case 'read':
    readFile(targetPath);
    break;

  case 'create':
    createFile(targetPath, content);
    break;

  case 'delete':
    deleteFile(targetPath);
    break;

  default:
    console.log('Invalid command entered');
    break;
}