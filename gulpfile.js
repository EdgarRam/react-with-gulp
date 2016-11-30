

var config = require('./build-helpers/config');


config.fn.readFolder( './tasks' );

config.modules.gulp.task('default', config.modules.sync.sync(
	[
		'clean',
        [
            'pug',
            'babel',
            'stylus'
        ],
        'watch',
		'server'
	]
))
