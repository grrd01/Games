module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        terser: {
            one: {
                options: {
                    compress: true,
                    mangle: true,
                    output: {
                        comments: 'some'
                    }
                },
                files: {
                    'dist/scripts/app.js': ['scripts/app.js']
                }
            }
        },
        svgmin: {
            options: {
                plugins: [
                    {removeUnknownsAndDefaults: false},
                    {removeViewBox: false}
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'images',
                    src: ['**/*.svg'],
                    dest: 'dist/images/'
                }]
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg}'],
                    dest: 'dist/images'
                }]
            }
        },
        cssmin: {
            dist: {
                options: {
                    banner: "/*\n* grrd's Games\n* Copyright (c) 2023 Gerard Tyedmers, grrd@gmx.net\n* Licensed under the MPL-2.0 License\n*/\n"
                },
                files: {
                    'dist/styles/app.css': ['styles/app.css']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    src: 'index.html',
                    dest: 'dist'
                }]
            }
        },
        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: /\<\!DOCTYPE html\>/g,
                            replacement: function () {
                                return "<!DOCTYPE html>\n<!-- \n* grrd's Games \n* Copyright (c) 2022 Gerard Tyedmers, grrd@gmx.net \n* Licensed under the MPL-2.0 License\n-->\n";
                            }
                        }
                    ]
                },
                files: [
                    {expand: true, flatten: true, src: ['dist/index.html'], dest: 'dist/'}
                ]
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['appmanifest.json'], dest: 'dist/'},
                    {expand: true, flatten: true, src: ['**.txt'], dest: 'dist/'},
                    {expand: true, flatten: true, src: ['**.md'], dest: 'dist/'},
                    {expand: true, flatten: true, src: ['CNAME'], dest: 'dist/'}
                    // , {
                    //     expand: true,
                    //     cwd: 'images/',
                    //     src: ['**/*.{png,jpg}'],
                    //     dest: 'dist/images'
                    // }
                ]
            }
        },
        'gh-pages': {
            options: {
                base: 'dist',
                user: {
                    name: 'grrd01',
                    email: 'gtyedmers@gmx.net'
                }
            },
            src: ['**']
        }
    });

    grunt.loadNpmTasks('grunt-terser');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.registerTask('default', [
        'terser',
        'svgmin',
        'imagemin',
        'cssmin',
        'htmlmin',
        'replace',
        'copy',
        //'gh-pages'
    ]);
};
