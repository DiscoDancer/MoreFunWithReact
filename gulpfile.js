const gulp = require("gulp");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");

gulp.task("react-bundle", function () {
    webpack(webpackConfig, function (err, stats) {
        if (err) {
            console.log(err);
        }
    });
});