var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var es = require('event-stream');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var rename = require('gulp-rename');

gulp.task('clean', function() {
    return gulp.src('dist/')
        .pipe(clean());
});

gulp.task('scripts', function() {
    return es.merge([
        gulp.src(['bower_components/jquery/dist/jquery.min.js',
            'bower_components/Materialize/dist/js/materialize.min.js',
            'bower_components/angular/angular.min.js',
            'bower_components/angular-cookies/angular-cookies.min.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/ngGTColorPicker/ng-gt-colorpicker.js'
        ]),
        gulp.src(['js/**/*.js']).pipe(concat('scripts.js')).pipe(uglify({
            mangle: false
        }))
    ]).pipe(concat('all.min.js'))

    .pipe(gulp.dest('dist/js'));
});

gulp.task('htmlmin', function() {
    return gulp.src(['views/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist/views'));
});

gulp.task('cssmin', function() {
    return es.merge([
            gulp.src([
                'bower_components/Materialize/dist/css/materialize.min.css',
                'bower_components/ngGTColorPicker/ng-gt-colorpicker.css',
            ]),
            gulp.src(['css/*.css']).pipe(cleanCSS())
        ])
        .pipe(concat('styles.css'))

    .pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function() {
    return gulp.src('bower_components/Materialize/dist/fonts/**')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('copy', function() {
    return gulp.src('index-prod.html')
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', function(callback) {
    return runSequence('clean', ['htmlmin', 'scripts', 'cssmin', 'fonts', 'copy'], callback);
});
