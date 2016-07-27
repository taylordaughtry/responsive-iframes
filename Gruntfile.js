module.exports = function(grunt) {
	grunt.initConfig({

	pkg: grunt.file.readJSON('package.json'),


	clean: {
		prep: ['fitvids-native.min.js']
	},

	jshint: {
		options: {
		reporter: require('jshint-stylish')
		},
		build: ['Gruntfile.js', 'fitvids-native.js']
	},

	uglify: {
		build: {
			files: {
				'fitvids-native.min.js': 'fitvids-native.js'
			}
		}
	},

	watch: {
		scripts: {
			files: ['fitvids-native.js'],
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