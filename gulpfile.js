var gulp = require("gulp");
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');


gulp.task('lint', function() {
    return gulp.src('hello.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});