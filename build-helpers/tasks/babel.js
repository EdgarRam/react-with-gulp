module.exports = ( config ) =>


   config.modules.gulp.task( 'babel', ( ) =>
       config.modules.gulp
       .src( config.foldersPath.babel.src )
       .pipe( config.modules.plumber())
       .pipe( config.modules.concat('index.js') )
       .pipe( config.modules.babel({
            presets: ['es2015', 'react']
        }) )
       .pipe( config.modules.gulp.dest( config.foldersPath.babel.build ) )
   )
