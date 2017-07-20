var fs = require('fs');

// "sample.json"
// {
//   "title"   : "DB",
//   "version" : 1,
//   "items" : [
//   	{"name" : "a", "id" : 1},
//   	{"name" : "b", "id" : 2},
//   	{"name" : "c", "id" : 3},
//   	{"name" : "d", "id" : 4},
//   	{"name" : "e", "id" : 5}
//   ]
// }

//main
// var inputStr = read("input.json");
var inputStr = read("input.json");
console.log(inputStr);
var obj = JSON.parse(inputStr); 

var items = obj.items;
for (var i in items) {
    var item = items[i];
    var name = item.name;
    var remarks = item.id;
    console.log(name, remarks);
}

//functions
function check(filePath) {
  var isExist = false;
  try {
    fs.statSync(filePath);
    return true;
  } catch(err) {
    return false;
  }
  return isExist;
}

function read(filePath) {
  var content = new String();
  if(check(filePath)) {;
    content = fs.readFileSync(filePath, 'utf8');
  }
  return content;
};
