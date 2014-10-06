define(['can', 'can/feathers/model'], function(can) {

	var Captain = can.Feathers.Model.extend({
		resource: '/captains'
	}, {
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
				var name = captain.attr('name');

				data.push({
					value: captain.attr('votes'),
					color: name === 'kirk' ? '#A98237' : '#591F1E',
					label: name
				});
			});

			return data;
		}
	});

	return Captain;

});