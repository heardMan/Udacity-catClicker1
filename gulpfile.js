'use strict'

const sass = require('gulp-sass');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');
const jasmineBrowser = require('gulp-jasmine-browser');



//compile scss to css
function style() {
    //declare scss source file 
    return gulp.src('sass/**/*.scss')
        //pass the source file to the scss compiler
        .pipe(sass().on('error', sass.logError))
        //declare the destination location to save the CSS
        .pipe(gulp.dest('./css'))
        //stream changes to the browser
        .pipe(browserSync.stream());
}


function watch() {
    //start the browser sync and declare base directory
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    //tell gulp to 
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js', lint ).on('change', browserSync.reload);
}

function lint(){
    return (
        gulp
            .src(['js/**/*.js'])
            // eslint() attaches the lint output to the eslint property
            // of the file object so it can be used by other modules.
            .pipe(eslint())
            // eslint.format() outputs the lint results to the console.
            // Alternatively use eslint.formatEach() (see Docs).
            .pipe(eslint.format())
            // To have the process exit with an error code (1) on
            // lint error, return the stream and pipe to failOnError last.
            .pipe(eslint.failOnError())
    );
}

function tests() {
    return gulp
		.src('tests/spec/extraSpec.js')
		.pipe(jasmineBrowser.specRunner({ console: true }))
		.pipe(jasmineBrowser.headless({ driver: 'chrome' }));
    
}

exports.style = style;
exports.watch = watch
exports.tests = tests;