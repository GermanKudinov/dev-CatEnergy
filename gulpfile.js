
let project_folder = "dist"
let source_folder = "src"

let path={
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        html: source_folder + "/*.html",
        css: source_folder + "/css/style.css",
        js: source_folder + "/js/script.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,ico,gif,webp}",
        fonts: source_folder + "/fonts/*",
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/css/**/*.css",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,ico,gif,webp}",
    },
    clean: "./" + project_folder + "/"
}

let { src, dist, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require("browser-sync").create();

function browserSync(params){
    browsersync.init({
        server:{
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    })
}

function html(){
    return src(path.src.html)
      .pipe(dest(path.build.html))
      .pipe(browsersync.stream())
}

let build = gulp.series(html);
let watch = gulp.parallel(build, browserSync);

 

exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;

