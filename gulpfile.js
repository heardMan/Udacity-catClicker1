'use strict'

const sass = require('gulp-sass');
const gulp = require('gulp');

function defaultTask(cb) {
    // place code for your default task here
    console.log(`Gulp has been successsfully loaded.
    Default Tasks Starting`);
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
    cb();
    console.log(`Default Task Complete`)
  }
  
  exports.default = defaultTask