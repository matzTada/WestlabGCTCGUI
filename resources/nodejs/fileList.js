var fs = require('fs');

var dirname = '.';

var li = fs.readdirSync(dirname);

console.log(li.includes('input.json'));

console.log(li);

