
var path = require('path');
 
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib');

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib());
}
 
var app = express();

app.use(require('stylus').middleware({
    src: __dirname,
    dest: __dirname + '/public',
    compile: compile
}));
app.use(express.static(__dirname + '/public'));

app.listen(3000);