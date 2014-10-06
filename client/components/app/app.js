define(['jquery',
	'can',
	'socketio',
	'text!components/app/init.stache',
	'models/captain',
	'components/vote/vote',
	'components/graph/graph',
	'can/feathers/model',
	'can/view/stache'],

function($, can, io, init, Captain) {

	var socket = io.connect();
	can.Feathers.connect(socket);

	var captainDfd = Captain.findAll();

	captainDfd.done(function(captains) {
		$('body').append(can.stache(init)({
			captains: captains
		}));
	});

});