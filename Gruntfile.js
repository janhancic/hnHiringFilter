module.exports = function( grunt ) {
	grunt.initConfig( {
		uglify: {
			build: {
				src: 'src/hn_hiring_filter.js',
				dest: 'build/hn_hiring_filter.min.js'
			}
		}
	} );

	grunt.loadNpmTasks( 'grunt-contrib-uglify' );

	grunt.registerTask( 'urlencode', 'Passes minified version trough url encode', function () {
		var minSource = grunt.file.read( 'build/hn_hiring_filter.min.js' ),
			urlEncodedSource = encodeURIComponent( minSource );

		grunt.file.write( 'build/hn_hiring_filter.urlencoded.js', urlEncodedSource );
	} );

	grunt.registerTask( 'update-readme', 'Updates the inline code in README', function () {
		// this task relies on the fact that there is only one ```javascript block in the README
		var urlEncodedSource = grunt.file.read( 'build/hn_hiring_filter.urlencoded.js' ),
			readmeContents = grunt.file.read( 'README.md' ),
			replaceString = '```javascript\njavascript:' + urlEncodedSource + '\n```';

		readmeContents = readmeContents.replace( /```javascript\n(.*)\n```/ig, replaceString );

		grunt.file.write( 'README.md', readmeContents );
	} );

	// Default task(s).
	grunt.registerTask( 'default', ['uglify', 'urlencode', 'update-readme'] );
};