define(['can', 'can/feathers/model', 'can/map/define'], function(can) {

	var Captain = can.Feathers.Model.extend({
		resource: '/captains'
	}, {
		define: {
			votes: {
				type: 'number'
			}
		},

		upvote: function() {
			var votes = this.attr('votes');
			this.attr('votes', votes + 1);

			this.save();
		}
	});

	Captain.List = Captain.List.extend({
		toPieData: function() {
			var data = [];

			this.forEach(function(captain) {
				data.push({
					value: captain.attr('votes'),
					color: captain.attr('id') % 2 ? '#591F1E' : '#A98237',
					label: captain.attr('name')
				});
			});

			return data;
		}
	});

	return Captain;

});