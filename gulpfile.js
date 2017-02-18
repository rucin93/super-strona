var gulp = require("gulp");
var sass = require("gulp-sass");
var cssnano = require("gulp-cssnano");
var livereload = require("gulp-livereload");
var autoprefixer = require("gulp-autoprefixer");


gulp.task("sass", function() {
	gulp.src("./src/sass/main.scss")
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
