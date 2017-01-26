var fs = require("fs");

var readStream = fs.createReadStream("fileToBeRead.txt");

var writeStream = fs.createWriteStream("fileToBeWritten.txt");

readStream.pipe(writeStream);

console.log("program has ended");