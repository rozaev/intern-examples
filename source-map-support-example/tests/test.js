define([
	'intern!object',
	'intern/chai!expect',
	'js/example.result'
], function (registerSuite, expect, result) {
	registerSuite({
		name: 'todoModel',
		'default data': function () {
			expect([2, 4, 6]).be.eql(result([1, 2, 3]));
		}
	});
});
