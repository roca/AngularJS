var customMatchers = {
	toBeAReasonablePlate: function() {
		return {
			compare: function(actual) {
				var pass = actual.isReasonable();
				var judgement = pass ? 'unreasonable' : 'reasonable';

				return {
					pass: pass,
					message: 'Expected plate to be a ' + judgement + ' plate.'
				};
			}
		};
	}
}