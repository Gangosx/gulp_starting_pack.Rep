const gulp = require("gulp");
const path = require("../path");

const fonts = () => {
    return gulp.src(path.fonts.src)
        .pipe(gulp.dest(path.fonts.build));
};

module.exports = fonts;