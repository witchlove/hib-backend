import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		create(){
			console.log("project created");
		},
		edit(){
			console.log("edit project");
		}
	}
});
