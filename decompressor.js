var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("compressed.txt.gz")
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream("unCompressed.txt"));

console.log("decompression successfull");