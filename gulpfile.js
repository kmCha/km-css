var less = require('gulp-less'),
		gulp = require('gulp'),
    path = require('path'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css');

gulp.task('less', ['clean'], function () {
  return gulp.src('less/*.less')
    .pipe(less({
      paths: ['less/']
    }))
  	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCSS())
    .pipe(gulp.dest('css/'));
});

gulp.task('clean', function() {
    return del(['css/']);
});

gulp.task('default', ['less']);