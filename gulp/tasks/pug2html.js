const gulp = require("gulp");
const path = require("../path");
const plumber = require("gulp-plumber");
const pug = require("gulp-pug");
const pugLinter = require("gulp-pug-linter");
const bemValidator = require("gulp-html-bem-validator");

const pug2html = () => {
    return gulp
        .src(path.pug.src)
        .pipe(plumber())
        .pipe(pugLinter({reporter: "default"}))
        .pipe(pug({pretty: true}))
        .pipe(bemValidator())
        .pipe(gulp.dest(path.pug.build));
};

module.exports = pug2html;