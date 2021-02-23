const gulp = require("gulp");
const path = require("../path");
const plumber = require("gulp-plumber");
const webpack = require("webpack-stream");
const eslint = require("gulp-eslint");

const scripts = () => {
    return gulp
        .src(path.js.src)
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(
            webpack({
                mode: process.env.NODE_ENV,
                output: {
                    filename: "[name].min.js",
                },
                module: {
                    rules: [
                        {
                            test: /\.js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                                loader: "babel-loader",
                                options: {
                                    presets: ["@babel/preset-env"],
                                },
                            },
                        },
                    ],
                },
                plugins: [],
            })
        )
        .pipe(gulp.dest(path.js.build));
};

module.exports = scripts;