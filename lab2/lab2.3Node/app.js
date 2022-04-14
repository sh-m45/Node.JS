const Fs = require('fs')  

//****** rename file *******

// const Path = require('path')

// const oldPath = Path.join(__dirname, "text.txt")  
// const newPath = Path.join(__dirname, "info.txt")

// Fs.renameSync(oldPath, newPath)  

// ******* delete file *********

// const path = './file.txt'

// try {
//   fs.unlinkSync(path)
//   //file removed
// } catch(err) {
//   console.error(err)
// }

// ******* Sync file *********

// var rawdata = Fs.readFileSync('data.json');
// var dataFile = JSON.parse(rawdata);
// console.log(dataFile);

// ******* Async file *********

Fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    let dataFile = JSON.parse(data);
    console.log(dataFile);
});
console.log('This is after the read call');