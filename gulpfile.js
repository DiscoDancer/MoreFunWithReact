const gulp = require("gulp");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
const jest = require('gulp-jest').default;
const glob = require("glob");



gulp.task("react-bundle", function () {
    webpack(webpackConfig, function (err, stats) {
        if (err) {
            console.log(err);
        }
    });
});

gulp.task('jest', function () {
    const tests = glob.sync("src/**/__tests__/");

    return gulp.src(tests).pipe(jest({
        "moduleFileExtensions": [
            "ts",
            "tsx",
            "js"
        ],
        "transform": {
            "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
        }
    }));
});