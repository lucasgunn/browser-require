/*jshint node:true*/

"use strict";

module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON("package.json"),

		connect: {
			server: {
				options: {
					port: 8001
				}
			}
		},

		jshint: {
			files: {
				src: ["src/*.js", "test/spec.js"]
			}
		},

		mocha_phantomjs: {
			test: {
				options: {
					reporter: "spec",
					urls: [
						'http://localhost:8001/test/index.html'
					]
				}
			}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %> */' + "\n"
			},
			dist: {
				files: {
					'./dist/browser-require.min.js': ['./src/browser-require.js']
				}
			}
		},

		watch: {
			all: {
				files: ['src/*.js', 'test/spec.js'],
				tasks: ["build"]
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-mocha-phantomjs");

	grunt.registerTask('build', ["jshint", "uglify", "connect", "mocha_phantomjs"]);

};