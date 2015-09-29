module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: {
                dot: true,
                src: ["!css/**", "css/*", "!*/syntax.css", "js/*", "img/*", "!img/favicon.png", "!img/apple-touch-icon.png"]
            }
        },
        coffee: {
            dist: {
                files: [{
                    'js/presentation.js': '_js/**/*.coffee'
                }]
            }
        },
        compass: {                  // Task
            dist: {                   // Target
              options: {              // Target options
                config: 'config.rb',
                cssDir: 'css',
                sassDir: '_sass',
                environment: 'production'
              }
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '_img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img'
                }]
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['compass']
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/impress.js/css/impress.min.css': ['vendor/impress.js/css/impress-demo.css']
                }
            }
        },
        uglify: {
            dist: {
              files: {
                'dist/impress.js/js/impress.min.js': ['vendor/impress.js/js/impress.js']
              }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['clean:dist', 'coffee', 'compass', 'cssmin', 'uglify', 'imagemin']);
    grunt.registerTask('update', ['newer:coffee', 'newer:compass', 'newer:cssmin', 'newer:uglify', 'newer:imagemin']);
};
