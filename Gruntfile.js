module.exports = function(grunt) {
	grunt.initConfig({

	pkg: grunt.file.readJSON('package.json'),


	clean: {
		prep: ['responsive-iframes.min.js']
	},

	jshint: {
		options: {
		reporter: require('jshint-stylish')
		},
		build: ['Gruntfile.js', 'responsive-iframes.js']
	},

	uglify: {
		build: {
			files: {
				'responsive-iframes.min.js': 'responsive-iframes.js'
			}
		}
	},

	watch: {
		scripts: {
			files: ['responsive-iframes.js'],
			tasks: 'default'
		}
	}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['clean', 'jshint', 'uglify', 'watch']);
};