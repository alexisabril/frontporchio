var captains = [
	{ id: 0, name: 'kirk', votes: 0 },
	{ id: 1, name: 'picard', votes: 0 }
];

var feathers = require('feathers'),
bodyParser = require('body-parser'),
_ = require('lodash');


var service = {
	find: function(params, cb) {
		cb(null, captains);
	},

	update: function(id, data, params, cb) {
		var captain = _.find(captains, function(captain) {
			return captain.id === parseInt(id, 10);
		});

		captain.votes = data.votes;

		cb(null, captain);
	}
};


feathers()
	.configure(feathers.rest())
	.configure(feathers.socketio())
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))
	.use(feathers.static(__dirname + '/client'))
	.use('/captains', service)
	.listen(8000);