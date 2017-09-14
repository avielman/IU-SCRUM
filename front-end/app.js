var browserify = require('browserify');
    var source = require('vinyl-source-stream');

    gulp.task('browserify', function() {
        // Grabs the app.js file
        return browserify('./src/app/app.js')
            // bundles it and creates a file called main.js
            .bundle()
            .pipe(source('main.js'))
            .pipe(gulp.dest('./public/'));
    });