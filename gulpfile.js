const   gulp        = require('gulp'),
        gutil       = require('gulp-util')
        dirMap      = require('gulp-directory-map'),
        tpl         = require('gulp-template'),
        rename      = require('gulp-rename'),
        runSequence = require('run-sequence'),

        baseDir     = 'app',
        destDir     = '';


const dirMapping = filetype => 
    gulp.src(`${baseDir}/**/*.${filetype === 'all' ? '*' : filetype}`)
    .pipe(dirMap({ filename: `tree-${filetype}.json`}))
    .pipe(gulp.dest('filetree'));
const getElem = data => {
    let inner = '';
    for(let item in data){
        if(data[item] instanceof Object) {
            inner +=`<li class="dir"><span>${item}</span><ul>${getElem(data[item])}</ul></li>`;
        } else {
            inner += `<li class="file"><a href="${data[item]}">${item}</a></li>`;
        }
    }
    return inner;
};
const getTree = data => {
    const dataMap  = require('./filetree/tree-' + data + '.json');
    gulp.src('filetree/tree.html')
    .pipe(tpl({tree: getElem(dataMap)}))
    .pipe(rename('tree-' + data + '.html'))
    .pipe(gulp.dest(destDir))
};

gulp
.task('folders-all', () => dirMapping('all'))
.task('addtree-all', ()=> getTree('all'))
.task('tree', ()=> runSequence('folders-all', 'addtree-all'))

.task('folders-js', () => dirMapping('js'))
.task('addtree-js', ()=> getTree('js'))
.task('tree-js', ()=> runSequence('folders-js', 'addtree-js'))

.task('default', ['tree']);