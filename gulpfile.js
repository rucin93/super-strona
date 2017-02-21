var gulp = require("gulp");
var sass = require("gulp-sass");
var cssnano = require("gulp-cssnano");
var livereload = require("gulp-livereload");
var autoprefixer = require("gulp-autoprefixer");
<<<<<<< HEAD
var plumber = require("gulp-plumber");

gulp.task("sass", function() {
	gulp.src("./src/sass/main.scss")
		.pipe(plumber())
=======


gulp.task("sass", function() {
	gulp.src("./src/sass/main.scss")
>>>>>>> 1b75822e6c8f211536458548d9d32fdd7b4e6482
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(cssnano())
		.pipe(gulp.dest("./build/css/"))
		.pipe(livereload());
});

gulp.task("default", ["sass"]);

gulp.task("watch", function() {
	livereload.listen();
	gulp.watch("./src/sass/**", ["sass"]);
});
