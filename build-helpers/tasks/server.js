
module.exports = ( config ) =>



    config.modules.gulp.task('server', ( ) =>
        config.modules.gulp
        .src( config.foldersPath.build )
        .pipe(config.modules.serverLiveReload({
            directoryListing: {
                enable: false,
                path: config.foldersPath.build
            },
            livereload: true,
            open: true,
            port: 3000
        }))

    )
