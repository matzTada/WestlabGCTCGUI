// function write(filePath, stream) {
//   ver result = false;
//   try {
//     fs.writeFileSync(filePath, stream);
//     return true;
//   } catch(err) {
//     return false;
//   }
// }

var data = {
	hoge: 100,
	foo: 'a',
	bar: true
};

console.log(JSON.stringify(data, null, '  '));