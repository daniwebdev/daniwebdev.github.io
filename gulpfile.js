var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var tailwindcss = require('tailwindcss')
var concat = require('gulp-concat');
const fileinclude = require('gulp-file-include');

gulp.task('css', function () {
    var plugins = [
        require('tailwindcss/nesting'),
        autoprefixer(),
        tailwindcss('./tailwind.config.js'),
    ];


    return gulp.src([
        './src/*.{css,scss}',
        './src/**/*.{css,scss}'
    ])
    .pipe(postcss(plugins))

    .pipe(concat('app.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('html', function() {
    
    return gulp.src(['./src/index.html'])
      .pipe(fileinclude({
        prefix: '@',
        basepath: '@file',
        context: {
            skills: './skills.json',
            experiance: './experiance.json',
        }
      }))
      .pipe(gulp.dest('./dist'));
})

gulp.task('js', function() {
    return gulp.src([
        './src/*.{js,ts}',
        './src/**/*.{js,ts}'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist'));
})

// run gulp watch
gulp.task('default', gulp.parallel('css','js', 'html'));

gulp.watch('./src/*.{css,scss}', gulp.series('css'));
gulp.watch('./src/**/*.{css,scss}', gulp.series('css'));
gulp.watch('./src/**/*.html', gulp.series(['html', 'css']));