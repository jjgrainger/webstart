module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      build: {
        options : {
          style : 'compressed'
        },
        files: {
          'assets/css/app.min.css': 'assets/src/sass/app.scss'
        }
      }
    },
    jshint: {
      files: ['assets/src/js/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    import_js: {
      files: {
        expand: true,
        cwd: 'assets/src/js/',
        src: ['app.js', 'app.head.js', 'vendor.js'],
        dest: 'assets/js/',
        ext: '.js'
      }
    },
    uglify : {
      my_target: {
        files: {
          'assets/js/app.min.js' : 'assets/js/app.js',
          'assets/js/app.head.min.js' : 'assets/js/app.head.js',
          'assets/js/vendor.min.js' : 'assets/js/vendor.js'
        }
      }
    },
    watch: {
      js: {
        files: ['assets/src/js/**/*.js'],
        tasks: ['jshint', 'import_js', 'uglify']
      },
      sass: {
        files: ['assets/src/sass/**/*.{scss,sass}'],
        tasks: ['sass']
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-import-js');

  // register tasks
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('start', ['jshint', 'import_js', 'uglify', 'sass', 'watch']);
  grunt.registerTask('build', ['jshint', 'import_js', 'uglify', 'sass']);
};
