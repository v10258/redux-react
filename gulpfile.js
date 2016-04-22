var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpWebpack = require('gulp-webpack');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var webpackConfig = require('./webpack.config.js');

var config = {
    src: 'src',
    subdir: '',
    html: 'pages',
    dist: 'dist',
    rev: 'rev',
    production: !!gutil.env.production
};

gulp.task('webpack', function() {

    return gulp.src('')
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest(config.dist + '/js'));
});

// 静态服务器 + 监视 less/html 文件
gulp.task('serve', function() {

    browserSync({
        server: './'
    });

    gulp.watch(config.src + '/js/' + config.subdir + '/**/*.js', ['webpack']);
    gulp.watch(config.src + '/**/*.scss', ['scss']);
    gulp.watch(config.html + '/**/*.html').on('change', reload);
});

// 默认任务
gulp.task('default', ['serve']);
