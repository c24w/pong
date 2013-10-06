define(['options-parser'], function (optionsParser) {

	function initialise(options) {
		options = optionsParser.parse(options);

		var canvas = document.createElement('canvas');

		canvas.width = options.width;
		canvas.height = options.height;

		options.context.appendChild(canvas);
	}

	return {
		init: initialise
	};

});