module.exports = function (grunt) {
  'use strict';

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-concat-css');
    var mozjpeg = require('imagemin-mozjpeg');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bootstrap: {
        dest: 'src',
        js: [
            'bootstrap-modal.js'
        ],
        css: [
            'modals.less'
        ]
    },
    uglify: {
      dist: {
        files: {
          'build/js/vendor.js': ['build/js/vendor.js']
        }
      }
    },
      concat: {
        dist: {
          src: ['bower_components/jquery/dist/jquery.js','bower_components/kineticjs/kinetic.js', 'bower_components/underscore/underscore-min.js', 'src/js/bootstrap.js', 'src/js/kinetic.js', 'bower_components/bootstrap/dist/js/bootstrap.js'],
          dest: 'build/js/vendor.js'
        }
      },
    // Observons…
      watch: {
        options: {
          livereload: true, // Activons le livereload du navigateur
        },
        src: {
          files: ['src/js/*.js', 'src/css/*.css', 'build/*.html'], // Les fichiers à observer…
          tasks: ['default'], // … la commande à effectuer
        }
      },
      jshint: {
    beforeconcat: ['src/js/<%= pkg.name %>.js']
  },
  concat_css: {
    options: {
      // Task-specific options go here.
    },
    all: {
      src: ["bower_components/bootstrap/dist/css/*.css", "src/css/*.css"],
      dest: "build/css/style.css"
    },
  },
  imagemin: {                          // Task
    dynamic: {                         // Another target
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'src/img/',                   // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'build/css/asset'                  // Destination path prefix
      }]
    }
  }
  });



  // Load the plugin that provides the "uglify" task.

  // Default task(s).
  grunt.registerTask('default', ['concat','uglify', 'jshint', 'concat_css', 'imagemin']);

};