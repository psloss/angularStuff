/**
 * Created by psloss on 11/28/2014.
 */
var mongoose = require('mongoose');
var express =  require('express');
var http =  require('http');
var app = express();
require('./app/app.js')
var dbURI = 'mongodb://localhost/planedata';
mongoose.connect(dbURI);
