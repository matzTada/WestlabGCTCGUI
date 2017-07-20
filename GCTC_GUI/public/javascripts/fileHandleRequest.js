//using jQuery

$('#formFP').submit(function() { // call postFP when a formFP's send button is pushed
  postFP();
  return false;
});

function postFP() { // POST /handler to send filename to be read on the server
  var filename = $('#textFP').val(); // get value from text form
  $('#textLM').val(''); // clear form
  console.log('require:' + filename + 'via POST');
  $.post('/handler', { filename: filename }, function(res) { //access post /handler with value
    console.log('received responce: ' + res + ' from server');

    if (res) {
      var obj = JSON.parse(res);
      var items = obj.items;
      for (var i in items) {
        var item = items[i];
        var name = item.name;
        var remarks = item.id;
        console.log(name, remarks);
      }
    } else {
      console.log('received invalid data');
    }
  });
}