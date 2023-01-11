//Cindy Yang Level 8 Section 86 Blocking and Non Blocking Code
var fs = require("fs");
//blocking
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("Program ended");

//non blocking 
fs.readFile('input.txt', function(err,data){
    if(err) return console.log(err);
    console.log(data.toString());
});

