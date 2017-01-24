import DS from 'ember-data';

export default DS.Model.extend({
	  employeeId: DS.attr('number'),
	  name: DS.attr('string'),
      dept: DS.attr('string'),
      dob:  DS.attr('date')
});
