//using jQuery

$('#formReadJson').submit(function() { // call postReadJson when a formReadJson's send button is pushed
  postReadJson();
  return false;
});

function postReadJson() { // POST /readjson to send filename to be read on the server
  var filename = $('#textReadJson').val(); // get value from text form
  // $('#textLM').val(''); // clear form
  console.log('require:' + filename + 'via POST');
  $.post('/readjson', { filename: filename }, function(res) { //access post /readjson with value
    console.log('received responce: ' + res + ' from server');

    if (res) {
      console.log('received valid data');
      // var obj = JSON.parse(res);
      // var items = obj.items;
      // for (var i in items) {
      //   var item = items[i];
      //   var name = item.name;
      //   var remarks = item.id;
      //   console.log(name, remarks);
      // }
    } else {
      console.log('received invalid data');
    }
  });
}


$('#formWriteJson').submit(function() { // call postWriteJson when a formWriteJson's send button is pushed
  postWriteJson();
  return false;
});

function postWriteJson() { // POST /WriteJson to send filename to be read on the server
  // var filename = $('#textWriteJson').val(); // get value from text form
  // $('#textLM').val(''); // clear form
  // console.log('require:' + filename + 'via POST');
  var content = '{testStr}';
  $.post('/writejson', { content: content }, function(res) { //access post /WriteJson with value
    console.log('received responce: ' + res + ' from server');
  });
}