'use strict'

const sass = require('gulp-sass');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();



  //compile scss to css
  function style(){
    //declare scss source file 
    return gulp.src('sass/**/*.scss')
    //pass the source file to the scss compiler
    .pipe(sass().on('error', sass.logError))
    //declare the destination location to save the CSS
    .pipe(gulp.dest('./css'))
    //stream changes to the browser
    .pipe(browserSync.stream());
  }
  

  function watch(){
      //start the browser sync and declare base directory
      browserSync.init({
          server: {
              baseDir: './'
          }
      });
      //tell gulp to 
      gulp.watch('./sass/**/*.scss', style);
      gulp.watch('./*.html').on('change', browserSync.reload);
      gulp.watch('./js/**/*.js').on('change', browserSync.reload);
  }
  
  
  exports.style = style;
  exports.watch = watch