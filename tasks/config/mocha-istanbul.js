module.exports = function(grunt) {
  grunt.config.set('mocha_istanbul', {
    coverage : {
      src : 'test',
      options : {
        coverage_folder : 'coverage',
        mask : '**/*.spec.js',
        root : 'api/',
        reportFormats : [ 'cobertura', 'lcovonly' ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha-istanbul');
};