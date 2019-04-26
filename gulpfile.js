'use strict';

/*
=====
PLUGINS
=====
*/

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    gulpSize = require('gulp-size'),
    del = require('del');

var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin');

sass.compiler = require('node-sass');

var concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


/*
=====
TASKS
=====
*/

function clean() {
    return del(['./lib/build']);
}

function compileSass() {
    return gulp.src('./lib/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 6 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('./lib/build'));
}

function compileJs() {
    return gulp.src('./lib/*.js')
        .pipe(plumber())
        .pipe(concat('scrollcarousel.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./lib/build'));
}

function watch() {
    gulp.watch('./lib/*.js', compileJs);
    gulp.watch('./lib/*.scss', compileSass);
}

/*
=====
EXPORT TASKS
=====
*/

exports.clean = clean;
exports.css = compileSass;
exports.js = compileJs;
exports.watch = watch;

exports.default = gulp.series(clean, gulp.parallel(compileSass, compileJs));