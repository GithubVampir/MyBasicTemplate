var gulp = require('gulp'),
	nunjucks = require('gulp-nunjucks'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
	project = 'Site'
gulp.task('project:watch', function () {
	watch('./dev/' + project + '/js/*.js', function(event) {
		return gulp.src('./dev/' + project + '/js/*.js')
		.pipe(
			gulp.dest('prod/' + project + '/assets/js')
		)
	})
	watch('./dev/' + project + '/html/*.html', function(event) {
		return gulp.src('./dev/' + project + '/html/**/*.html')
		.pipe(
			nunjucks.compile()
		)
		.pipe(
			gulp.dest('prod/' + project)
		)
	})
	watch('./dev/' + project + '/sass/*.scss', function(event) {
		return gulp.src('./dev/' + project + '/sass/*.scss')
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
			gulp.dest('prod/' + project + '/assets/css')
		)
	})
})
