
'use strict';

// description displayed when running grunt-init
exports.description = 'A simple scaffold for a front-end project';

// note displayed on complete
exports.after = 'All done, have fun :)';

// warn if any files already exist in the directory
exports.warnOn = '*';

// run template
exports.template = function(grunt, init, done) {

    // define files/folders to copy (in root)
    var files = init.filesToCopy();

    // copy and process fiels
    init.copyAndProcess(files);

    // create empty directories
    grunt.file.mkdir('assets/css');
    grunt.file.mkdir('assets/js');
    grunt.file.mkdir('assets/img');

    done();
};
