define(['chai', 'test-helpers', 'pong'], function (chai, helpers, pong) {

	var expect = chai.expect, sandbox;

	describe('pong', function () {

		beforeEach(function () {
			sandbox =  helpers.createSandbox();
		});

		afterEach(function () {
			helpers.destroySandbox(sandbox);
		});

		it('should load the module', function () {
			helpers.module(pong).shouldExpose(
				'init'
			);
		});

		it('should create a canvas from the options', function () {
			pong.init();

			var context = document.getElementById('pong-game');
			var canvas = context.getElementsByTagName('canvas')[0];

			context.parentNode.removeChild(context);

			expect(canvas).to.be.ok;
			expect(canvas.width).to.equal(800);
			expect(canvas.height).to.equal(400);
		});

	});

});