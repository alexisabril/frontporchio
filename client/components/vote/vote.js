define(['can',
	'models/captain',
	'text!components/vote/init.stache',
	'can/view/stache'],

function(can, Captain, init) {

	can.Component.extend({
		tag: 'vote-area',
		template: can.stache(init),
		scope: {
			'vote': function(captain) {
				captain.upvote();
			}
		}
	})

});