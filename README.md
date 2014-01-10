# browser-require

A mini library to allow node style scripts to be 'require'ed into a local variable in the browser.

## We don't need no stinkin' documentation!
Quick and dirty list of features here:

```js
// Synchonous node.js style - don't use unless you know the implications!
var module = mrq('module_name.js');

// Async style - preferred
mrq('module_name.js', function(module) {
	if(module) {
		module.do_something();	
	}
});

// Async multi style
mrq.multi(['./path1/module1.js', './path2/dir2/module2.js'], function(module1, module2) {
	if(module1) {
		module1.do_something();
	}
	if(module2) {
		module2.do_something();
	}
});

// If you're already using window.mrq
var local_mrq = mrq.conflict();

// You've already loaded a module, but need to clear it's cache
mrq.clear('module_name.js');

// You need to trash the entire cache
mrq.clear();
```

An example module loaded by it should look like a standard node.js module

```js
/**
*	Dummy module
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
```

## Caveat
As this depends on the `new Function` feature of javascript, which is a form of `eval`, 
the same security issues to do with using `eval` apply - only use this to load from sources 
you can trust!

## Usage

The built js file is inside the 'dist' directory. Point a `script` tag at either the 
src or dist version of the js file. 

### Supported syntaxes

There are three ways to use this library in your project:

* node.js style - **synchronous**. This is great for local dev and where files will be loaded from a 
local filesystem - ie: cordova or similar. Would seriously recommend against this in general use though.
Slow loads will lock your UI! See example below:

	```js
	var math = mrq('./modules/math.js');
	math.sub(10); // <-- From test modules - would return 102000
	```

* async style - **asynchronous**. This is the more normal use case for fetching a module. Fetches 
the module with a normal async xhr call, and returns it to the supplied callback. Returns null on 
syntax error or server error - 404, etc.

	```js
	mrq('./modules/math.js', function(math) {
		math.sub(10); // <-- From test modules - would return 102000
	});
	```

* require.js styl(ish) - **asynchronous**. This one is handy for loading multiple modules in a 
single call. It's syntax is a bit like require.js in that it will return the modules to the 
callback in the order they were supplied as params. See example below:

	```js
	mrq.multi(['./modules/math.js', './modules/string.js'], function(math, string) {
		// From test modules - would return 102000
		math.sub(10); 
		// From test modules - would return 'Awesome_string'
		string.reverse('gnirts_emosewA'); 
	});
	```

* clear cache - The module will cache the constructed modules so subsequent calls don't incur 
another local or network call + object construction. Should you need to force it to request again, you 
can trash the cache for that module by calling:
	
	```js
	mrq.clear('./module_name.js');
	```

	The cache also has the upside of being able to use a module locally in lots of locations without 
	there being a massive memory use either - they're all just pointers to the main one in the cache. 

	You can also remove **all modules** in the cache by calling it without a param

	```js
	mrq.clear();
	```

	Note: If you check the uris generated on request, you'll note they're appended with a 
	(?|&)_=timestamp, similar to jquery. This is to force the browser to actually re-request the 
	file, note provide it from it's own cache.

## Development requirements - ie: "Your code sucks and I'm gonna fix it..."

You'll need node installed, so you can run:
	
	npm install

This will get the dev requirements. 

You can then run the following command:

	grunt watch

Which will watch the src files, test and build on the fly. 

You can also manually run tests, then build by calling:

	grunt build