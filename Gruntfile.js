module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      scriptCore: {
        files: [
          'dist/js/core.js' => [
            'bower_components/jquery/jquery.min',
            'bower_components/angular/angular.min',
            'bower_components/angular-route/angular-route.min',
            'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min',
          ]
        ]
      },
      scriptApp: {
        files: [
          'dist/js/app.js' => ['js/**/*.js']
        ]
      }
    },
    ngtemplates:  {
      web:{
        src:'web/**/*.html',
        dest:'dist/js/templates.js',
        options:{
          htmlmin:{
            collapseWhitespace: true, 
            collapseBooleanAttributes: true 
          }
        }
      }
    },
    watch: {
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['js'],
        options: {
          spawn: false,
        },
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('js', ['uglify']);
  grunt.registerTask('css', ['cssmin']);
  grunt.registerTask('temp', ['ngtemplates']);
  
  // Default task(s).
  grunt.registerTask('default', ['js', 'css']);

};
