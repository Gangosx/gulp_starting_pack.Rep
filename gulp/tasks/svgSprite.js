const gulp = require("gulp");
const path = require("../path");
const svgSpriteBuild = require("gulp-svg-sprite");

const svgSprite = () => {
    return gulp
        .src(path.svg.src)
        .pipe(
            svgSpriteBuild({
                shape: {
                    spacing: {
                        padding: 10
                    },
                },
                mode: {
                    inline: true,
                    symbol: true,
                },
            })
        )
        .pipe(gulp.dest(path.svg.build));
};

module.exports = svgSprite;