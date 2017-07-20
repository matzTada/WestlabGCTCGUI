//using jQuery

$('#formLM').submit(function() { // call postLM when a formLM's send button is pushed
  postLM();
  return false;
});

function postLM() { // POST /ledmatrix to send message to ledmatrix via UDP
  var name = $('#textLM').val(); // get value from text form
  $('#textLM').val(''); // clear form
  $.post('/handler', { name: name }, function(res) { //access post /ledmatrix with value
    console.log(res);
  });
}