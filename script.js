var fs = require('fs');
var json = fs.readFileSync("sample.json", "utf-8");
var obj = JSON.parse(json); // 
var items = obj.items;
var i;
var item;
var name;
var remarks;

for (i in items) {
    item = items[i];
    name = item.name;
    remarks = item.id;
    console.log(name, remarks);
}