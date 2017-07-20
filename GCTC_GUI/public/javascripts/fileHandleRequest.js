//using jQuery

var recentJsonObj = undefined;

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
      var obj = JSON.parse(res);

      var jsonListStr = '';

      jsonListStr += "<ul>";
      for (var soto in obj) {
        jsonListStr += "<li>";
        jsonListStr += soto + ' : ';
        console.log(soto, tmpSotoObj);
        var tmpSotoObj = obj[soto];
        if (typeof(tmpSotoObj) == "object") {
          jsonListStr += "<ul>";
          for (var naka in tmpSotoObj) {
            jsonListStr += "<li>";
            jsonListStr += naka + ' : ';

            jsonListStr += "<input id='" + naka + "' type='text' value='" + tmpSotoObj[naka] + "'/>"

            console.log(naka, tmpSotoObj[naka]);
            jsonListStr += "</li>";
          }
          jsonListStr += "</ul>";
        } else {
          jsonListStr += tmpSotoObj;
        }
        jsonListStr += "</li>";
      }
      jsonListStr += "</ul>";

      $('#jsonList').html(jsonListStr);

      recentJsonObj = obj; // pass json object for output

    } else {
      console.log('received invalid data');
    }
  });

}


$('#formWriteJson').submit(function() { // call postWriteJson when a formWriteJson's send button is pushed
  postWriteJson();
  return false;
});

function postWriteJson(jsonobj) { // POST /WriteJson to send filename to be read on the server
  if (recentJsonObj != undefined && recentJsonObj.params.length != 0) {
  	for(var key in recentJsonObj.params){
      recentJsonObj.params[key] = $('#' + key).val();
      $('#' + key).val('');
  	}
    // var filename = $('#textWriteJson').val(); // get value from text form
    // console.log('require:' + filename + 'via POST');
    // var content = '{"testStr" : "testStr"}';
    var content = JSON.stringify(recentJsonObj);
    $.post('/writejson', { content: content }, function(res) { //access post /WriteJson with value
      console.log('received responce: ' + res + ' from server');
    });
    recentJsonObj = undefined;
  }else{
  	consol.log("invalid operation. write canceled")
  }

}