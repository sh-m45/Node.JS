const util = require('util');
const Emmitter = require('events');

function customEmmitter(){}

util.inherits(customEmmitter, Emmitter) ;

module.exports = customEmmitter ;