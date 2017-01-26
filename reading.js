var fs = require('fs');
var data = '';

var readStream = fs.createReadStream('fileToBeRead.txt');

// readStream.setEncoding("UTF8");

readStream.on('data',function(chunk){
	data = data + chunk;
});

readStream.on('end',function(){
	console.log("readStream ended with data->",data);
})

readStream.on('error',function(error){
	console.log("error was faced",error);
})

console.log("alls well that ends well, like this program has ended");