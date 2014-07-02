module.exports = function(grunt) {

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      lcs: grunt.file.read('LICENSE'),
      uglify: {
          options: {
              banner: '/*! <%=pkg.name%> <%=grunt.template.today("yyyy-mm-dd")%>\n'
                + '<%=pkg.description%>\n'
                + '=============================================================\n'
                + '<%=lcs%> */\n'
          },
          build: {
              src: 'src/<%=pkg.name%>.js',
              dest: 'build/<%=pkg.name%>-<%=pkg.version%>.min.js'
          }               
      }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);

};