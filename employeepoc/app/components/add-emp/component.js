import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('store'),
	actions:{
           addEmployee(){
           this.get('model.employee').save().then((response) =>{
           });
           }
	}  
	
});
