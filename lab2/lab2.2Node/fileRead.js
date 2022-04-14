// ***** Synchronous code / blocking code *****

const fs = require('fs');
const LineReader=require('readline');
var content = fs.readFileSync('./greet.txt', 'utf8') ;
console.log(content);
console.log('done');



// ***** Asynchronous code / non-blocking code*****

// var fs = require('fs');
// fs.readFile('./greet.txt', 'utf8', function(err,data){
//     if(err) throw err ;
//     console.log(data)
// }) ;

// console.log('done');

