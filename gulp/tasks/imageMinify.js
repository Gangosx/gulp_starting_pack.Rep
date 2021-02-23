const gulp = require("gulp");
const path = require("../path");
const imagemin = require("gulp-imagemin");

const imageMinify = () => {
    return gulp
        .src(path.images.src)
        .pipe(
            imagemin([
                imagemin.gifsicle({interlaced: true}),
                imagemin.mozjpeg({
                    quality: 90,
                    progressive: true,
                }),
                imagemin.optipng({optimizationLevel: 5}),
                imagemin.svgo({
                    plugins: [{removeViewBox: true}, {cleanupIDs: false}],
                }),
            ])
        )
        .pipe(gulp.dest(path.images.build));
};

module.exports = imageMinify;