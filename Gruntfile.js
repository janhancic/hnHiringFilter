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

	// Default task(s).
	grunt.registerTask( 'default', ['uglify', 'urlencode'] );
};