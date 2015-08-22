/**
 * Created by 192.168.3.29 on 8/22/2015.
 */
var gulp = require("gulp");
var rimraf=require("rimraf");
var uglify = require("gulp-uglify");

gulp.task('hello',function(){
  console.log('test');
});
//this task run if we type only gulp here it is dependend on clean and copy task
// so it will run clean task first then copy
gulp.task('default',['clean','copy4']);

gulp.task('hello2',function(){
  console.log('test2');
});

//copying src folder files
gulp.task('copy1', function () {
  gulp.src("app/src/*")
    .pipe(gulp.dest("app2"));
});

//copying folder and its file. Double** is use to copy folder and its inside file

gulp.task('copy2', function () {
  gulp.src("app/**")
    .pipe(gulp.dest("app2"));
});

//copy only js files in app2 folder
gulp.task('copy3',function(){
  gulp.src("app/src/*.js")
    .pipe(gulp.dest("app2"));
});

//copy every folder and its file
gulp.task('copy4',function(){
  gulp.src("app/**/*")
    .pipe(gulp.dest("app2"));
});

//delete the created folder app2
gulp.task('clean',function(){
  rimraf("app2",{force:true},function(){
      console.log("delete completed");
  })
});

gulp.task('concatenate',function(){
  gulp.src('app1/*.js')
    .pipe(concat('file2.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app2/file2.js'))
});
