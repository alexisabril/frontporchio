var captains = [
	{ id: 0, name: 'Kirk', votes: 0 },
	{ id: 1, name: 'Picard', votes: 0 }
];

var feathers = require('feathers'),
parser = require('body-parser'),
_ = require('lodash');

var service = {
	find: function(params, cb) {
		cb(null, captains);
	},

	update: function(id, data, params, cb) {
		var captain = _.find(captains, function(c) {
			return c.id === parseInt(id, 10);
		});

		captain.votes = data.votes;

		cb(null, captain);
	}
};

feathers()
	.configure(feathers.rest())
	.configure(feathers.socketio())
	.use(parser.json())
	.use(parser.urlencoded({ extended: true }))
	.use(feathers.static(__dirname + '/client'))
	.use('/captains', service)
	.listen(8000);