define(function () {

	var defaultOptions = {
		context: function () { // lazy build context
			var context = document.createElement('div');
			context.id = 'pong-game';
			document.body.appendChild(context);
			return this.context = context;
		},
		width: 800,
		height: 400
	};

	function getDefaultOption(optionName) {
		var option = defaultOptions[optionName];
		return (typeof option === 'function')
		       ? option.call(defaultOptions)
		       : option;
	}

	function parseOptions(userOptions) {
		var options = {};

		for (var optionName in defaultOptions) {
			if (defaultOptions.hasOwnProperty(optionName)) {
				options[optionName] = userOptions && userOptions[optionName]
				                   || getDefaultOption(optionName);
			}
		}

		return options;
	}
	
	return {
		parse: parseOptions,
		defaultOptions: defaultOptions
	};

});