const gulp = require("gulp");

const { serve } = require("./gulp/tasks/serve");
const pug2html = require("./gulp/tasks/pug2html");
const styles = require("./gulp/tasks/styles");
const scripts = require("./gulp/tasks/scripts");
const fonts = require("./gulp/tasks/fonts");
const imageMinify = require("./gulp/tasks/imageMinify");
const clean = require("./gulp/tasks/clean");
const svgSprite = require("./gulp/tasks/svgSprite");
const watch = require("./gulp/tasks/watch");

function setMode(isProduction = false) {
  return (done) => {
    process.env.NODE_ENV = isProduction ? "production" : "development";
    if (done) done();
  };
}

const dev = gulp.parallel(
    pug2html,
    styles,
    scripts,
    fonts,
    imageMinify,
    svgSprite
);

const build = gulp.series(clean, dev);

module.exports.start = gulp.series(setMode(), build, serve, watch);
module.exports.build = gulp.series(setMode(true), build);
module.exports.clean = gulp.task(clean);