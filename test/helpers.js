define(['chai'], function (chai) {

	function isNativeProperty(obj, prop) { return !obj.hasOwnProperty(prop) && prop in obj; }

	function assertModuleExposes(module, properties) {
		chai.assert(module !== undefined, 'module is undefined');

		for (var i = 0; i < properties.length; ++i) {
			var prop = properties[i];
			chai.assert(!isNativeProperty(module, prop), prop + ' is a native property (no need to be exposed)');
			chai.assert(module.hasOwnProperty(prop), prop + ' is not exposed');
		}
	}

	function module(mod) {
		return {
			shouldExpose: function () {
				assertModuleExposes(mod, arguments);
			}
		};
	}

	function createSandbox() {
		var sandbox =  document.createElement('div');
		sandbox.id = 'sandbox';
		sandbox.style.display = 'none';
		document.body.appendChild(sandbox);
		return sandbox;
	}

	function destroySandbox(sandbox) {
		sandbox.parentNode.removeChild(sandbox);
	}

	return {
		module: module,
		createSandbox: createSandbox,
		destroySandbox: destroySandbox
	};

});