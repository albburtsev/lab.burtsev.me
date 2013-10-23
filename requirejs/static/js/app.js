require(['underscore', 'jquery', 'utils', 'settings'], function($, _, utils, settings) {
	log($ ? 'jQuery loaded' : 'jQuery failed');
	log(_ ? 'underscore loaded' : 'underscore failed');
	log('Success: js/app.js loaded');
	console.log('jquery', $);
	console.log('underscore', _);
	console.log('utils', utils);
	console.log('settings', settings);
});