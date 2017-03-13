define([
], function () {
	return function (arr) {
		const result = arr.map((el) => {
			return el * 2;
		});

		return result;
	}
});