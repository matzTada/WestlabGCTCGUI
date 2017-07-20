var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs'); //added by TadaMatz file handling

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.post('/readjson', function(req, res) {
  var filename = req.body.filename;
  console.log('received: ' + filename + ' from client');
  if (filename) {
  	var filepath = path.join(__dirname, '/public', '/jsons', filename);
  	console.log('filepath: ' + filepath);
  	var filestr = fileRead(filepath);
    console.log(filestr);
    var returnObj = {
      "filepath" : filepath,
      "filestr" : JSON.parse(filestr)
    }
    var returnStr = JSON.stringify(returnObj);
  	console.log(returnStr);
  	if(returnStr){ //succeed in read file and has contents
      res.send(returnStr);
      console.log("send data");
  	}else{
  	  res.send(false);
  	  console.log("error or no data");
  	}
  } else {
    res.send(false);
  } 
});

app.post('/writejson', function(req, res) {
  var content = req.body.content;
  console.log('received: ' + content + ' from client');
  if (content) {
  	var filepath = path.join(__dirname, '/public', '/jsons', '/output.json');
  	console.log('filepath: ' + filepath);
  	var result = fileWrite(filepath, content);
  	if(result){ //succeed in read file and has contents
      res.send(true);
      console.log('succeed in write file: ' + filepath);
  	}else{
  	  res.send(false);
  	  console.log("error in write file: " + filepath);
  	}
  } else {
    res.send(false);
  } 
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

//file handling functions
function fileCheck(filePath) {
  var isExist = false;
  try {
    fs.statSync(filePath, { encoding: 'utf8' });
    console.log(true);
    return true;
  } catch(err) {
    console.log(false);
    return false;
  }
  return isExist;
}

function fileRead(filePath) {
  var content = new String();
  if(fileCheck(filePath)) {;
    content = fs.readFileSync(filePath, { encoding: 'utf8' });
    console.log('finish read file');
  }
  return content;
};

function fileWrite(filePath, stream) {
  var result = false;
  try {
    fs.writeFileSync(filePath, stream);
    return true;
  } catch(err) {
    return false;
  }
}
