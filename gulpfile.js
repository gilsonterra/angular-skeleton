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
        gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/angular/angular.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/angular-ui-tinymce/src/tinymce.js',
            'node_modules/angular-ui-router/release/angular-ui-router.min.js',
            'node_modules/angular-cookies/angular-cookies.min.js',
            'node_modules/angular-aria/angular-aria.min.js',
            'node_modules/angular-animate/angular-animate.min.js',
            'node_modules/angular-sanitize/angular-sanitize.min.js',
            'node_modules/datatables.net/js/jquery.dataTables.js',
            'node_modules/datatables.net-bs/js/dataTables.bootstrap.js',
            'node_modules/angular-datatables/dist/angular-datatables.min.js',
            'node_modules/datatables.net/js/jquery.dataTables.js',
            'node_modules/datatables.net-bs/js/dataTables.bootstrap.js',
            'node_modules/sweetalert/dist/sweetalert.min.js',
            'node_modules/jquery-mask-plugin/dist/jquery.mask.min.js',
            'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
            'node_modules/angular-local-storage/dist/angular-local-storage.min.js',
        ]),
        gulp.src(['js/**/*']).pipe(concat('scripts.js')).pipe(uglify({
            mangle: false
        }))
    ]).pipe(concat('all.min.js'))

    .pipe(gulp.dest('dist/js'));
});

gulp.task('htmlmin', function() {
    return es.merge([
                gulp.src(['views/*.html']),
                gulp.src(['views/**/*.html'])
            ])
            .pipe(htmlmin({
                collapseWhitespace: true
            }))
            .pipe(gulp.dest('dist/views'));
});

gulp.task('cssmin', function() {
    return es.merge([
            gulp.src([
                'node_modules/bootswatch/cosmo/bootstrap.min.css',
                'node_modules/datatables.net-bs/css/dataTables.bootstrap.css',
                'node_modules/font-awesome/css/font-awesome.min.css',
                'node_modules/sweetalert/dist/sweetalert.css',
                'node_modules/select2/dist/css/select2.min.css',
                'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css'
            ]),
            gulp.src(['css/*.css']).pipe(cleanCSS())
        ])
        .pipe(concat('styles.css'))

    .pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function() {
    return es.merge([
                gulp.src([
                    'node_modules/font-awesome/fonts/**',
                    'node_modules/bootstrap/fonts/**',
                ]),
            ])
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
