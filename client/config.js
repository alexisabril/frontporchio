require.config({

	map: {
		'*': {
			'text': 'lib/require-text/text',
			'can/feathers/model': 'lib/canjs-feathers/lib/feathers'
		}
	},

	paths: {
		'bootstrap': 'lib/bootstrap/js',
		'jquery': 'lib/jquery/dist/jquery',
		'can': 'lib/canjs/amd/can',
		'chartjs': 'lib/chartjs/Chart',
		'socketio': 'lib/socket.io-client/socket.io'
	},

	shim: {
		'jquery': {
			exports: 'jQuery'
		}
	}

});