import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('rental');
  },
  actions: {
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  },
  saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
});
