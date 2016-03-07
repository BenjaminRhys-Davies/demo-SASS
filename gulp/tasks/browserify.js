var gulp = require('gulp');
var connect = require('gulp-connect');
var gutil = require('gulp-util');
var browserify = require('browserify');
var config = require('../config').browserify;
var source = require('vinyl-source-stream');
var watchify = require('watchify');

watchify.args.debug = config.debug;
var bundler = watchify(browserify(config.src, watchify.args));
config.settings.transformations.forEach(function (t) {
  bundler.transform(t.transform, t.opts);
});

var bundle = function () {
  return bundler.bundle()
  .on('error', gutil.log.bind(gutil, 'Browserify Error'))
  .pipe(source(config.outputName))
  .pipe(gulp.dest(config.dest))
  .pipe(connect.reload());
};

gulp.task('browserify', bundle);
bundler.on('update', bundle);
