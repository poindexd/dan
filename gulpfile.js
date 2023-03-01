"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect");
var pugInheritance = require("gulp-pug-inheritance");
var pug = require("gulp-pug");
var changed = require("gulp-changed");
var cached = require("gulp-cached");
var gulpif = require("gulp-if");
var filter = require("gulp-filter");

var templateCache = require("gulp-angular-templatecache");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");

// Start dev server

gulp.task("server", function () {
  connect.server({
    port: 8005,
    root: "dist",
    livereload: true,
  });
});

gulp.task("compile-commands", function () {
  return gulp
    .src("commands/**/*.pug")
    .pipe(pug())
    .pipe(
      templateCache("command-templates.js", {
        transformUrl: function (url) {
          return "command-template-" + url.replace(/\.html$/, "");
        },
        standalone: true,
        module: "commandTemplates",
      })
    )
    .pipe(gulp.dest("dist/js"));
});

gulp.task("compress", function () {
  return gulp
    .src("./js/**/*.js")
    .pipe(
      uglify({
        preserveComments: "license",
      }).on("error", console.error.bind(console))
    )
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
});

gulp.task("sass", function () {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});

gulp.task("pug", function () {
  return gulp
    .src("./pug/**/*.pug")
    .pipe(pug())
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
});

gulp.task("watch", function () {
  gulp.watch("pug/**/*.pug", gulp.series("pug"));
  gulp.watch("sass/**/*.scss", gulp.series("sass"));
  gulp.watch("js/**/*.js", gulp.series("compress"));
  gulp.watch("commands/**/*.pug", gulp.parallel("compile-commands", "pug"));
});

gulp.task(
  "default",
  gulp.parallel(
    "compile-commands",
    "pug",
    "sass",
    "compress",
    "server",
    "watch"
  )
);
