'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    pref = require('gulp-autoprefixer'),
    cssmin = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps');

var path = {
    build: {
        html: 'build/',
        css: 'build/css/',
    },
    src: {
        html: '*.html',
        style: 'css/Style.less',
    },
    watch: {
        html: 'src/**/*.html',
        style: 'src/style/**/*.less'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend"
};

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html));
});
gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(cssmin())
        .pipe(pref())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)); //И в build

});
