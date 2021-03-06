//using jQuery

var recentJsonObj = undefined;

$(function() { //soon after finishing to read html file
  postFileList();
  return false;
});

$('#formFileList').submit(function() {
  postFileList();
  return false;
});

$(document).on('click', '.filelistbutton', function() {
  console.log(this);
  $('#textReadJson').val(this.value); // get value from text form
  postReadJson();
});

function postFileList() {
  $.post('/filelist', {}, function(res) { //access post /readjson with value
    console.log('received responce: ' + res + ' from server');

    if (res) {
      console.log('received valid data');

      var resObj = JSON.parse(res);

      // var str = "<ul>";
      // for (var key in resObj) {
      //   str += "<li>";
      //   var value = resObj[key];
      //   var id = 'button' + value;
      //   str += "<input id='" + id + "' class='filelistbutton' type='button' value='" + value + "'/>";
      //   str += "</li>";
      // }
      // str += "</ul>";

      var str = "<table>";
      for (var key in resObj) {
        str += "<tr>";
        str += "<td>";

        var value = resObj[key];
        var id = 'button' + value;
        str += "<input id='" + id + "' class='filelistbutton' type='button' value='" + value + "'/>";

        str += "</td>";
        str += "</tr>";

      }
      str += "</table>";
      $('#fileList').html(str);

    } else {
      console.log('received invalid data');
      recentJsonObj = undefined
    }
  });
}

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
      var jsonNameStr = obj.filepath;
      $('#jsonName').html(jsonNameStr);
      // var jsonListStr = recursiveJsonList(obj.filestr, '');
      var jsonListStr = recursiveJsonTable(obj.filestr, '');
      $('#jsonList').html(jsonListStr);
      recentJsonObj = obj.filestr; // pass json object for output

    } else {
      console.log('received invalid data');
      recentJsonObj = undefined
    }
  });

}


$('#formWriteJson').submit(function() { // call postWriteJson when a formWriteJson's send button is pushed
  postWriteJson();
  return false;
});

function postWriteJson(jsonobj) { // POST /WriteJson to send filename to be read on the server
  var filename = $('#textReadJson').val(); // get value from text form
  if (recentJsonObj != undefined && recentJsonObj.params.length != 0) {
    for (var key in recentJsonObj.params) {
      if (typeof(recentJsonObj.params[key]) != "object") {
        recentJsonObj.params[key] = $('#form' + key).val();
        $('#form' + key).val('');
      }
    }
    // var filename = $('#textWriteJson').val(); // get value from text form
    var content = JSON.stringify(recentJsonObj); // var content = '{"testStr" : "testStr"}';
    $.post('/writejson', { filename: filename, content: content }, function(res) { //access post /WriteJson with value
      console.log('received responce: ' + res + ' from server');
      if (res) {
        postReadJson();
      }
    });
  } else {
    console.log("invalid operation. write canceled")
  }
}

function recursiveJsonList(jsonObj, prevKey) { //cannot handle array yet... need to be fixed
  var str = "<ul>";
  for (var key in jsonObj) {
    str += "<li>";
    str += key + ' : ';
    var value = jsonObj[key];
    // console.log(key, value);

    if (typeof(value) == "object") {
      str += recursiveJsonList(value, key);
    } else {
      if (prevKey == 'params') { //hmmm... need to be fixed
        str += "<input id='form" + key + "' type='text' value='" + value + "'/>"
      } else {
        str += value;
      }
    }
    str += "</li>";
  }
  str += "</ul>";

  return str;
}

function recursiveJsonTable(jsonObj, prevKey) { //cannot handle array yet... need to be fixed
  var str = "<table>";
  for (var key in jsonObj) {
    str += "<tr>";
    str += "<td>";
    str += key;
    str += "</td>";
    str += "<td>";
    var value = jsonObj[key];
    // console.log(key, value);

    if (typeof(value) == "object") {
      str += recursiveJsonTable(value, key);
    } else {
      if (prevKey == 'params') { //hmmm... need to be fixed
        str += "<input id='form" + key + "' type='text' value='" + value + "'/>"
      } else {
        str += value;
      }
    }
    str += "</td>";
    str += "</tr>"
  }
  str += "</table>";

  return str;
}