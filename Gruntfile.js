module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			// livereload: {
			// 	files: [
			// 		// '**/*.js',
			// 		'**/*.html',
			// 		'**/*.css'
			// 	],
			// },
			scss: {
				files: ['app/components/**/*.scss', 'resources/sass/*.scss'],
				tasks: ['sass'],
			},
			uglify: {
				files: ['resources/js/*.js'],
				tasks: ['uglify'],
			},
			// css: {
			// 	files: ['themes/default/css/*.css'],
			// 	tasks: ['cssmin:target_css'],
			// },
			// css_ps: {
			// 	files: ['themes/default/css/page_styles/*.css'],
			// 	tasks: ['cssmin:target_css_ps'],
			// },
			options: {
				spawn: true,
				// livereload: true,
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compact'
				},
				// files: {
				// 	'compiled/css/style.css': 'resources/sass/style.scss',
				// 	'app/components/page_portfolio/portfolio.component.css': 'app/components/page_portfolio/portfolio.component.scss',
				// 	'app/components/page_main/main.component.css': 'app/components/page_main/main.component.scss',
				// 	'app/components/page_services/services.component.css': 'app/components/page_services/services.component.scss'
				// }
				files: [{
					expand: true,
					cwd: 'app/components',
					src: ['**/*.scss'],
					dest: 'app/components/',
					ext: '.component.css'
				},
				{
					'compiled/css/style.css': 'resources/sass/style.scss'
				}]
			}
		},
		uglify: {
			// options: {
			// 	banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			// },
			build: {
				src: ['resources/js/*.js'],
				dest: 'compiled/js/app.min.js'
			}
		},
		// cssmin: {
		// 	options: {
		// 		keepBreaks: true,
		// 		advanced: false
		// 	},
		// 	target_css: {
		// 		files: [
		// 			{
		// 				expand: true,
		// 				cwd: 'themes/default/css',
		// 				src: ['*.css', '!*.min.css'],
		// 				dest: 'themes/default/min/css',
		// 				ext: '.min.css'
		// 			}
		// 		]
		// 	},
		// 	target_css_ps: {
		// 		files: [
		// 			{
		// 				expand: true,
		// 				cwd: 'themes/default/css/page_styles',
		// 				src: ['*.css', '!*.min.css'],
		// 				dest: 'themes/default/min/css/page_styles',
		// 				ext: '.min.css'
		// 			}
		// 		]
		// 	}
		// }
	});

	// Load the plugin that provides the task.
	// grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['uglify', /*'cssmin', */'sass', 'watch']);
};