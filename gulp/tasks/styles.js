const gulp = require("gulp");
const path = require("../path");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");

const styles = () => {
    return (
        gulp
            .src(path.styles.src)
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass().on("error", sass.logError))
            .pipe(
                autoprefixer({
                    cascade: false,
                })
            )
            .pipe(
                cleanCSS(
                    {
                        debug: true,
                        compatibility: "*",
                    },
                    details => {
                        console.log(
                            `${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`
                        );
                    }
                )
            )
            .pipe(sourcemaps.write())
            .pipe(rename({suffix: ".min"}))
            .pipe(gulp.dest(path.styles.build))
    );
};

module.exports = styles;