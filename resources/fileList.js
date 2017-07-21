var fs = require('fs');

var dirname = '.';

fs.readdir(dirname, function(err, list) {
  if (err) {
    console.error(err);
  } else {
    for (var i = 0; i < list.length; i++) {
      console.log(list[i]);
    }
  }
});