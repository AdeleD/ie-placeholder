var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function() {
  gulp.src("./placeholder.es6")
    .pipe(babel())
    .pipe(gulp.dest("./dest"));
});
