var fs = require('fs');

//main
var outputFilePath = "output.json";
var data = {
	hoge: 100,
	foo: 'a',
	bar: true
};

console.log(JSON.stringify(data, null, '  '));
write(outputFilePath, JSON.stringify(data, null, '  '))

//functions
function write(filePath, stream) {
  var result = false;
  try {
    fs.writeFileSync(filePath, stream);
    return true;
  } catch(err) {
    return false;
  }
}

