define({
	environments: [ { browserName: 'chrome' } ],

	maxConcurrency: 3,

	tunnel: 'SeleniumTunnel',


	loaderOptions: {
		packages: [
			{ name: 'js', location: 'js' }
		]
	},
	reporters: [ 'Console', 'LcovHtml' ],

	suites: [ 'tests/all' ],

	// A regular expression matching URLs to files that should not be included in code coverage analysis. Set to `true`
	// to completely disable code coverage.
	excludeInstrumentation: /^(?:tests|node_modules)\//
});
