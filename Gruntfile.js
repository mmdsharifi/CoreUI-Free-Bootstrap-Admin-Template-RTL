/*!
 * CoreUI's Gruntfile
 * http://coreui.io
 * Copyright 2016 creativeLabs Łukasz Holeczek
 * License : http://coreui.io/license
 */

module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        sass: {
            development: {
                files: {
                    'css/style.css' : 'scss/bootstrap/bootstrap.scss'
                }
            }
        },
       
        watch: {
            options: {
                livereload: true,
                interval: 1000
            },
            sass: {
                options: {
                    livereload: false
                },
                files: ['**/*.scss', '**/**/*.scss'],
                tasks: ['css']
            },
            // cssmin: {
            //     options: {
            //         livereload: false
            //     },
            //     files: ['css/*.css', '!css/*.min.css'],
            //     tasks: ['cssmin:development']
            // },
            reload: {
                files: ['**/*.html', '**/**/*.html', '**/*.js', '**/**/*.js']
            },
            livereload: {
                options: { livereload: true, interval: 1000 },
                files: [
                    '**/*.css'
                ]
            },
        },

        postcss : {
            options: {
                processors: [
                require('autoprefixer')(),
                require('cssnext')(),
                require('rtlcss')
            ]
            },

            dist: {
                src: 'css/style.css',
                dest: 'dest/style.css'
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    // Default task.
    grunt.registerTask('css', ['sass', 'postcss']);
    grunt.registerTask('default', ['watch']);
};
