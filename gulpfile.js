var gulp = require('gulp'),
	nunjucks = require('gulp-nunjucks'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch')
gulp.task('project:watch', function () {
	watch('./dev/js/*.js', function(event) {
		return gulp.src('./dev/js/*.js')
		.pipe(
			gulp.dest('prod/js')
		)
	})
	watch('./dev/html/*.html', function(event) {
		return gulp.src('./dev/html/*.html')
		.pipe(
			nunjucks.compile()
		)
		.pipe(
			gulp.dest('prod')
		)
	})
	watch('./dev/sass/*.scss', function(event) {
		return gulp.src('./dev/sass/*.scss')
		.pipe(
			plumber(function(error) {
				this.emit('end')
			})
		)
		.pipe(
			sass()
		)
		.pipe(
			autoprefixer()
		)
		.pipe(
			gulp.dest('prod/css')
		)
	})
})
