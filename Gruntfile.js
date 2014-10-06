module.exports = function(grunt) {

	grunt.initConfig({
		requirejs: {
			compile: {
				options: {
					baseUrl: 'client/',
					mainConfigFile: 'client/config.js',
					name: 'app',
					out: 'client/dist/app.min.js'
				}
			}
		},

		uglify: {
			dist: {
				files: {
					'client/dist/base.min.js': ['client/lib/almond/almond.js', 'client/config.js']
				}
			}
		},

		concat: {
			dist: {
				src: ['client/dist/base.min.js', 'client/dist/app.min.js'],
				dest: 'client/dist/index.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['requirejs', 'uglify', 'concat']);

};