/**
*	Dummy module for testing
*/
/* jshint node:true */

"use strict";

var private_var = 102010;

exports.add = function(num) {
	return private_var + num;
};

exports.sub = function(num) {
	return private_var - num;
};

exports.sin = function(num) {
	return Math.sin(num);
};

exports.cos = function(num) {
	return Math.cos(num);
};

exports.tan = function(num) {
	return Math.tan(num);
};

module.exports = function() {
	return private_var;
};

/* 

Pad this module a bit to force load times up for clear tests

Lorem ipsum Sunt velit commodo ea eiusmod proident ex incididunt nisi nostrud reprehenderit in est
in pariatur incididunt aliquip Excepteur Excepteur consequat ea do cillum irure anim mollit occaecat
labore dolore quis eu pariatur ut aliquip laborum voluptate aliquip aute elit officia Duis sint
culpa ea tempor cillum elit dolor non sed do laboris deserunt laboris ex amet minim quis mollit do
aute veniam quis consectetur amet in nulla sunt Duis aute dolor Ut non occaecat nisi sunt cupidatat
in mollit pariatur do ut ullamco veniam magna nisi in amet enim ex in laboris ut eu ut sit dolore
consectetur Excepteur dolor labore do nisi ut laborum ut elit et cupidatat voluptate enim consequat
occaecat pariatur quis est incididunt ex voluptate tempor sed elit quis sunt Excepteur Ut culpa
adipisicing qui eiusmod mollit proident et quis anim qui.

Lorem ipsum Sunt velit commodo ea eiusmod proident ex incididunt nisi nostrud reprehenderit in est
in pariatur incididunt aliquip Excepteur Excepteur consequat ea do cillum irure anim mollit occaecat
labore dolore quis eu pariatur ut aliquip laborum voluptate aliquip aute elit officia Duis sint
culpa ea tempor cillum elit dolor non sed do laboris deserunt laboris ex amet minim quis mollit do
aute veniam quis consectetur amet in nulla sunt Duis aute dolor Ut non occaecat nisi sunt cupidatat
in mollit pariatur do ut ullamco veniam magna nisi in amet enim ex in laboris ut eu ut sit dolore
consectetur Excepteur dolor labore do nisi ut laborum ut elit et cupidatat voluptate enim consequat
occaecat pariatur quis est incididunt ex voluptate tempor sed elit quis sunt Excepteur Ut culpa
adipisicing qui eiusmod mollit proident et quis anim qui.

Lorem ipsum Sunt velit commodo ea eiusmod proident ex incididunt nisi nostrud reprehenderit in est
in pariatur incididunt aliquip Excepteur Excepteur consequat ea do cillum irure anim mollit occaecat
labore dolore quis eu pariatur ut aliquip laborum voluptate aliquip aute elit officia Duis sint
culpa ea tempor cillum elit dolor non sed do laboris deserunt laboris ex amet minim quis mollit do
aute veniam quis consectetur amet in nulla sunt Duis aute dolor Ut non occaecat nisi sunt cupidatat
in mollit pariatur do ut ullamco veniam magna nisi in amet enim ex in laboris ut eu ut sit dolore
consectetur Excepteur dolor labore do nisi ut laborum ut elit et cupidatat voluptate enim consequat
occaecat pariatur quis est incididunt ex voluptate tempor sed elit quis sunt Excepteur Ut culpa
adipisicing qui eiusmod mollit proident et quis anim qui.

Lorem ipsum Sunt velit commodo ea eiusmod proident ex incididunt nisi nostrud reprehenderit in est
in pariatur incididunt aliquip Excepteur Excepteur consequat ea do cillum irure anim mollit occaecat
labore dolore quis eu pariatur ut aliquip laborum voluptate aliquip aute elit officia Duis sint
culpa ea tempor cillum elit dolor non sed do laboris deserunt laboris ex amet minim quis mollit do
aute veniam quis consectetur amet in nulla sunt Duis aute dolor Ut non occaecat nisi sunt cupidatat
in mollit pariatur do ut ullamco veniam magna nisi in amet enim ex in laboris ut eu ut sit dolore
consectetur Excepteur dolor labore do nisi ut laborum ut elit et cupidatat voluptate enim consequat
occaecat pariatur quis est incididunt ex voluptate tempor sed elit quis sunt Excepteur Ut culpa
adipisicing qui eiusmod mollit proident et quis anim qui.

Lorem ipsum Sunt velit commodo ea eiusmod proident ex incididunt nisi nostrud reprehenderit in est
in pariatur incididunt aliquip Excepteur Excepteur consequat ea do cillum irure anim mollit occaecat
labore dolore quis eu pariatur ut aliquip laborum voluptate aliquip aute elit officia Duis sint
culpa ea tempor cillum elit dolor non sed do laboris deserunt laboris ex amet minim quis mollit do
aute veniam quis consectetur amet in nulla sunt Duis aute dolor Ut non occaecat nisi sunt cupidatat
in mollit pariatur do ut ullamco veniam magna nisi in amet enim ex in laboris ut eu ut sit dolore
consectetur Excepteur dolor labore do nisi ut laborum ut elit et cupidatat voluptate enim consequat
occaecat pariatur quis est incididunt ex voluptate tempor sed elit quis sunt Excepteur Ut culpa
adipisicing qui eiusmod mollit proident et quis anim qui.

Lorem ipsum Sunt velit commodo ea eiusmod proident ex incididunt nisi nostrud reprehenderit in est
in pariatur incididunt aliquip Excepteur Excepteur consequat ea do cillum irure anim mollit occaecat
labore dolore quis eu pariatur ut aliquip laborum voluptate aliquip aute elit officia Duis sint
culpa ea tempor cillum elit dolor non sed do laboris deserunt laboris ex amet minim quis mollit do
aute veniam quis consectetur amet in nulla sunt Duis aute dolor Ut non occaecat nisi sunt cupidatat
in mollit pariatur do ut ullamco veniam magna nisi in amet enim ex in laboris ut eu ut sit dolore
consectetur Excepteur dolor labore do nisi ut laborum ut elit et cupidatat voluptate enim consequat
occaecat pariatur quis est incididunt ex voluptate tempor sed elit quis sunt Excepteur Ut culpa
adipisicing qui eiusmod mollit proident et quis anim qui.

Lorem ipsum Sunt velit commodo ea eiusmod proident ex incididunt nisi nostrud reprehenderit in est
in pariatur incididunt aliquip Excepteur Excepteur consequat ea do cillum irure anim mollit occaecat
labore dolore quis eu pariatur ut aliquip laborum voluptate aliquip aute elit officia Duis sint
culpa ea tempor cillum elit dolor non sed do laboris deserunt laboris ex amet minim quis mollit do
aute veniam quis consectetur amet in nulla sunt Duis aute dolor Ut non occaecat nisi sunt cupidatat
in mollit pariatur do ut ullamco veniam magna nisi in amet enim ex in laboris ut eu ut sit dolore
consectetur Excepteur dolor labore do nisi ut laborum ut elit et cupidatat voluptate enim consequat
occaecat pariatur quis est incididunt ex voluptate tempor sed elit quis sunt Excepteur Ut culpa
adipisicing qui eiusmod mollit proident et quis anim qui.

Lorem ipsum Sunt velit commodo ea eiusmod proident ex incididunt nisi nostrud reprehenderit in est
in pariatur incididunt aliquip Excepteur Excepteur consequat ea do cillum irure anim mollit occaecat
labore dolore quis eu pariatur ut aliquip laborum voluptate aliquip aute elit officia Duis sint
culpa ea tempor cillum elit dolor non sed do laboris deserunt laboris ex amet minim quis mollit do
aute veniam quis consectetur amet in nulla sunt Duis aute dolor Ut non occaecat nisi sunt cupidatat
in mollit pariatur do ut ullamco veniam magna nisi in amet enim ex in laboris ut eu ut sit dolore
consectetur Excepteur dolor labore do nisi ut laborum ut elit et cupidatat voluptate enim consequat
occaecat pariatur quis est incididunt ex voluptate tempor sed elit quis sunt Excepteur Ut culpa
adipisicing qui eiusmod mollit proident et quis anim qui.

Lorem ipsum Sunt velit commodo ea eiusmod proident ex incididunt nisi nostrud reprehenderit in est
in pariatur incididunt aliquip Excepteur Excepteur consequat ea do cillum irure anim mollit occaecat
labore dolore quis eu pariatur ut aliquip laborum voluptate aliquip aute elit officia Duis sint
culpa ea tempor cillum elit dolor non sed do laboris deserunt laboris ex amet minim quis mollit do
aute veniam quis consectetur amet in nulla sunt Duis aute dolor Ut non occaecat nisi sunt cupidatat
in mollit pariatur do ut ullamco veniam magna nisi in amet enim ex in laboris ut eu ut sit dolore
consectetur Excepteur dolor labore do nisi ut laborum ut elit et cupidatat voluptate enim consequat
occaecat pariatur quis est incididunt ex voluptate tempor sed elit quis sunt Excepteur Ut culpa
adipisicing qui eiusmod mollit proident et quis anim qui.

Lorem ipsum Sunt velit commodo ea eiusmod proident ex incididunt nisi nostrud reprehenderit in est
in pariatur incididunt aliquip Excepteur Excepteur consequat ea do cillum irure anim mollit occaecat
labore dolore quis eu pariatur ut aliquip laborum voluptate aliquip aute elit officia Duis sint
culpa ea tempor cillum elit dolor non sed do laboris deserunt laboris ex amet minim quis mollit do
aute veniam quis consectetur amet in nulla sunt Duis aute dolor Ut non occaecat nisi sunt cupidatat
in mollit pariatur do ut ullamco veniam magna nisi in amet enim ex in laboris ut eu ut sit dolore
consectetur Excepteur dolor labore do nisi ut laborum ut elit et cupidatat voluptate enim consequat
occaecat pariatur quis est incididunt ex voluptate tempor sed elit quis sunt Excepteur Ut culpa
adipisicing qui eiusmod mollit proident et quis anim qui.
*/