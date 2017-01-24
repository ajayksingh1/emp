import Ember from 'ember';

export default Ember.Route.extend({
	//store: Ember.inject.service('store'), 

	model(){
		return Ember.RSVP.hash({
			employee: this.store.createRecord('emloyee')
		});
	}

	/*createEmployeeRecord(){
		return this.store.createRecord('employee');
	}*/
});
