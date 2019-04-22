'use strict';

/*
=====
PLUGINS
=====
*/

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    gulpSize = require('gulp-size');

var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin');

var concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


/*
=====
TASKS
=====
*/

function sass() {
    return gulp.src('/lib/*.scss')
    .pipe(plumber({
        errorHandler: function(err) {
            console.log('sass task error: ', err);
            this.emit('end');
        }
    }))
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 6 versions'],
        cascade: false
    }))
    .pipe(cssmin())
        .pipe(gulp.dest('lib/build'));
}


/*
=====
EXPORT TASKS
=====
*/

exports.sass = sass;