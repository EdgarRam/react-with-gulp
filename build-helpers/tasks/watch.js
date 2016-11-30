module.exports = ( config ) =>


   config.modules.gulp.task('watch', ( ) =>{
        config.modules.gulp.watch( config.foldersPath.stylus.src , ['stylus'] )

        config.modules.gulp.watch( config.foldersPath.pug.src , ['pug'] )

        config.modules.gulp.watch( config.foldersPath.babel.src , ['babel'] )
   })
