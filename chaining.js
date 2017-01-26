var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("fileToBeRead.txt")
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream("compressed.txt.gz"));

console.log("compression successfull");