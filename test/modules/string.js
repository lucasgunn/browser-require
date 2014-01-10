/**
*	Dummy module for testing
*/
/* jshint node:true */

"use strict";

var private_var = 'HereIsAPrivateVar';

exports.reverse = function(str) {
	str = str.split('');
	str.reverse();
	return str.join('');
};

exports.sort = function(str) {
	str = str.split('');
	str.sort();
	return str.join('');
};

module.exports = function(str) {
	return private_var;
};