define(function () {

	function base(file) { return '../test/' + file; }

	require.config({

		paths: {
			'tests': base('tests'),
			'pong.tests' : base('pong.tests'),
			'options-parser.tests' : base('options-parser.tests'),
			'test-helpers': base('helpers')
		}

	});

});