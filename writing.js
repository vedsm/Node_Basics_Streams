var fs = require("fs");
var dataToWrite = "This is a very cool data which I want to write to a given file.";

var writeStream = fs.createWriteStream("fileToBeWritten.txt");

writeStream.write(dataToWrite,'UTF8');

writeStream.end();

writeStream.on('finish',function(){
	console.log("writing has been finished");
});

writeStream.on('error',function(error){
	console.log("error was faced->",error);
});

console.log("This is the end.")