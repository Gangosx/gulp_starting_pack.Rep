const gulp = require("gulp");
const path = require("../path");
const { serveReload } = require("./serve");
const imageMinify = require("./imageMinify");
const svgSprite = require("./svgSprite");
const styles = require("./styles");
const script = require("./scripts");
const pug2html = require("./pug2html");

const watch = (done) => {
    gulp.watch(path.images.src, gulp.series(imageMinify, serveReload));
    gulp.watch(path.svg.watch, gulp.series(svgSprite, pug2html, serveReload));
    gulp.watch(path.styles.watch, gulp.series(styles, serveReload));
    gulp.watch(path.js.watch, gulp.series(script, serveReload));
    gulp.watch(path.pug.watch, gulp.series(pug2html, serveReload));
};

module.exports = watch;
