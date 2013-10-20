module.exports = function(grunt) {
	grunt.initConfig({
		requirejs: {
			compile: {
				options: {
					baseUrl: 'static/js',
					paths: {
						jquery: '../lib/jquery-2.0.3.min',
						underscore: '../lib/underscore-min'
					},
					shim: {
						underscore: {
							exports: '_'
						}
					},
					out: 'static/js/app.full.js',
					name: 'app',
					optimize: 'none'
				}
			}
		},
		concat: {
			build: {
				src: [
					'static/lib/require.js',
					'static/js/app.full.js'
				],
				dest: 'static/js/app.build.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['requirejs', 'concat']);
};