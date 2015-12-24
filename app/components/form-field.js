import Ember from 'ember';

export default Ember.Component.extend({
	type: function(){
	var label = this.get('label');
	if(label.match(/password/i))
		return "password"
	else 
		return "text"
  }.property('label')
});
