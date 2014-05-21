/**
*	Micro-require browser module
*/
/* jshint browser:true, evil:true */
/* global console:true */
(function(window) {
	"use strict";

	var store = {},
		XHR = window.XMLHttpRequest,
		oldName = window.mrq;

	// Exposed function
	window.mrq = function(path, cb) {
		var data, obj;
		if(store[path] && !cb) {
			return store[path];
		}
		if(store[path] && !cb) {
			cb.call(window, store[path]);
		}
		if(!cb || typeof(cb) !== 'function') {
			data = fetchSync(path);
			if(data === null) {
				return null;
			}
			obj = construct(data, path);

			if(!obj) {
				return null;
			}
			store[path] = obj;
			return obj;	
		} else {
			fetchAsync(path, cb);
		}
	};

	// Exposed multi get
	window.mrq.multi = function(arr, cb) {
		if(!arr || !arr.length || !cb) {
			cb.apply(window, []); return;
		}

		var len = arr.length,
			y = len,
			complete = 0,
			collection = [],
			respCB = function(path) {
				return function(module) {
					var index = arr.indexOf(path);
					collection[index] = module;
					complete++;
					if(complete === len) {
						cb.apply(window, collection);
					}
				};
			};

		while(y--) {
			fetchAsync(arr[y], respCB(arr[y]));
		}
	};

	window.mrq.conflict = function() {
		var me = window.mrq;
		window.mrq = oldName;
		return me;
	};

	window.mrq.clear = function(name) {
		if(!name) {
			store = {};
			return true;
		}
		if(store[name]) {
			delete store[name];
			return true;
		}
		return false;
	};

	function fetchSync(path) {
		var req = new XHR(),
			uri = makeURI(path);
		req.open('GET', uri, false);
		req.send(null);
		if(req.status === 200) {
			return req.responseText;
		} else {
			return null;
		}
	}

	function fetchAsync(path, cb) {
		var req = new XHR(),
			uri = makeURI(path);
		req.open('GET', uri, true);
		req.onload = function() {
			if(req.status === 200) {
				var obj = construct(req.responseText, path);
				if(!obj) {
					cb.call(window, function() {});
					return;
				}
				store[path] = obj;
				cb.call(window, obj);
			} else {
				cb.call(window, null);
			}
		};
		req.send(null);
	}

	function construct(data, path) {
		var fn,
			module = {},
			exports = {},
			retObj, keys, y;

		try{
			fn = new Function('require','module','exports', data);
		} catch(e) {
			console.error('Error parsing js file ---> ' + path);
			return null;
		}

		fn(window.mrq, module, exports);

		if(module.exports) {
			retObj = module.exports;
		} else {
			retObj = {};
		}

		keys = Object.keys(exports); y = keys.length;
		while(y--) {
			retObj[keys[y]] = exports[keys[y]];
		}

		return retObj;
	}

	function makeURI(path) {
		var uri = path,
			hasQuery = uri.indexOf('?');

		uri += (hasQuery !== -1) ? '&_=' : '?_=';
		uri += new Date().getTime();
		return uri;
	}

}(window));
