/* jshint browser:true, expr:true */
/* global console:true, after:true, afterEach:true, before:true, beforeEach:true, describe:true, it:true */

(function(window) {

	"use strict";

	var expect = window.chai.expect,
		mrq = window.mrq;

	// Run the tests
	describe("browser-require tests", function () {

		it('should exist', function() {
			expect(window.mrq).to.exist;
		});

		it('should be browser-require', function() {
			expect(typeof(mrq)).to.equal('function');
			expect(typeof(mrq.multi)).to.equal('function');
			expect(typeof(mrq.conflict)).to.equal('function');
		});

		it('should set window.mrq back to previous object on mrq.conflict()', function() {
			var local = mrq.conflict(),
				oldOne = window.mrq;
			expect(oldOne).to.not.equal(mrq);
			expect(oldOne.myOldObject).to.equal(true);
			window.mrq = local;
		});

		it('should support node\'s synchronous style of require', function() {
			var math = mrq('./modules/math.js?user=tester');
			expect(math).to.not.equal(null);
			expect(math()).to.equal(102010);
			expect(math.sub(10)).to.equal(102000);
		});

		it('should support an asynchonous style for a single module', function (done) {
			mrq('./modules/string.js', function(str) {
				expect(str).to.not.equal(null);
				expect(str()).to.equal('HereIsAPrivateVar');
				expect(str.reverse('gnirts_emosewA')).to.equal('Awesome_string');
				done();
			});
		});

		it('should return multiple modules in the supplied order for mrq.multi()', function (done) {
			mrq.multi(['./modules/string.js','./modules/math.js'], function(str, math) {
				expect(str).to.not.equal(null);
				expect(math).to.not.equal(null);
				expect(str()).to.equal('HereIsAPrivateVar');
				expect(math()).to.equal(102010);
				expect(str.reverse('gnirts_emosewA')).to.equal('Awesome_string');
				expect(math.sub(10)).to.equal(102000);
				done();
			});
		});

		it('should clear the cache for a specificed module name', function () {
			mrq.clear();
			var before = new Date().getTime(),
				math = mrq('./modules/math.js'),
				after = new Date().getTime();

			expect(before).to.not.equal(after);

			// Should be coming from cache, *should* report 0 diff
			before = new Date().getTime();
			math = mrq('./modules/math.js');
			after = new Date().getTime();

			expect(after-before).to.equal(0);

			var clear = mrq.clear('./modules/math.js');
			expect(clear).to.equal(true);

			// Should be re-requested, *should* be longer than 0
			before = new Date().getTime();
			math = mrq('./modules/math.js');
			after = new Date().getTime();

			expect(before).to.not.equal(after);
		});

		it('should clear the entire cache for mrq.clear()', function () {
			mrq.clear();
			var before = new Date().getTime(),
				math = mrq('./modules/math.js'),
				string = mrq('./modules/string.js'),
				after = new Date().getTime();

			expect(before).to.not.equal(after);

			// Should be coming from cache, *should* report 0 diff
			before = new Date().getTime();
			math = mrq('./modules/math.js');
			string = mrq('./modules/string.js');
			after = new Date().getTime();

			expect(after-before).to.equal(0);

			var clear = mrq.clear();
			expect(clear).to.equal(true);

			// Should be re-requested, *should* be longer than 0
			before = new Date().getTime();
			math = mrq('./modules/math.js');
			string = mrq('./modules/string.js');
			after = new Date().getTime();

			expect(before).to.not.equal(after);
		});

	});

}(window));

