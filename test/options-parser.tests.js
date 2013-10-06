define(['chai', 'test-helpers', 'options-parser'], function (chai, helpers, optionsParser) {

	var expect = chai.expect;

	describe('options-parser', function () {

		it('should load the module', function () {
			helpers.module(optionsParser).shouldExpose(
				'parse',
				'defaultOptions'
			);
		});

		it('should use all default options', function () {
			expect(optionsParser.parse())
			  .to.deep.equal(optionsParser.defaultOptions);
		});

		it('should override default options when specified', function () {
			var options = optionsParser.parse({
				context: 'my context',
				width: 123
			});

			expect(options.context).to.equal('my context');
			expect(options.width).to.equal(123);
			expect(options.height).to.equal(optionsParser.defaultOptions.height);
		});


	});

});