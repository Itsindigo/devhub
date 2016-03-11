module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webdriver: {
      test: {
        configFile: './test/wdio.conf.js'
      }
    },
    ngconstant: {
    // Options for all targets
    options: {
      space: '  ',
      wrap: '"use strict";\n\n {%= __ngModule %}',
      name: 'config',
    },
    // Environment targets
    development: {
      options: {
        dest: '<%= yeoman.app %>/javascripts/config.js'
      },
      constants: {
        ENV: {
          name: 'development',
          apiEndpoint: 'http://localhost:3000'
        }
      }
    },
    production: {
      options: {
        dest: '<%= yeoman.dist %>/javascripts/config.js'
      },
      constants: {
        ENV: {
          name: 'production',
          apiEndpoint: 'http://api.livesite.com'
        }
      }
    }
  },
  });

  grunt.loadNpmTasks('grunt-webdriver');

  grunt.registerTask('default', ['webdriver']);
};
