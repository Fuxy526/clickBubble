var gulp = require('gulp');
var uglify = require('gulp-uglify'); // js compress plugin
var rename = require('gulp-rename'); // file rename plugin
var colors = require('colors'); // console color text plugin

/**
 * compress js
 */
gulp.task('compress', function() {
	return gulp.src('js/jquery.clickBubble.js')
		.pipe(uglify())
		.pipe(rename('jquery.clickBubble.min.js'))
		.pipe(gulp.dest('js'));
});

/**
 * watch file change
 */
gulp.task('watch', function() {
	var watcher = gulp.watch('js/jquery.clickBubble.js', ['compress']);
	watcher.on('change', function(event) {
		console.log('File ' + event.path.yellow + ' was ' + event.type + ', running tasks...');
	});
});

/**
 * default task
 */
gulp.task('default', ['compress', 'watch']);