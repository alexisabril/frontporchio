define(['can',
	'text!components/graph/init.stache',
	'chartjs',
	'can/view/stache'],

function(can, init, Chart) {

	can.Component.extend({
		tag: 'graph-area',
		template: can.stache(init),
		events: {
			_pie: null,
			_pieData: null,

			inserted: function(el) {
				var ctx = el.find('canvas')[0].getContext('2d');

				this._pie = new Chart(ctx).Pie(this.scope.attr('captains').toPieData());
			},

			'{captains} change': function(captains, ev, which, how) {
				if(how === 'set') {
					var captains = this.scope.attr('captains').toPieData();

					for(var i = 0; i < this._pie.segments.length; i++) {
						can.extend(this._pie.segments[i], captains[i]);
					}

					this._pie.update();
				}
			}
		}
	});

});