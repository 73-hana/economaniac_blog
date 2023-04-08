const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
  return gulp.src('*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dest'));
}

function watchFiles() {
  gulp.watch('*.scss', compileSass);
}

exports.default = gulp.series(compileSass, watchFiles);