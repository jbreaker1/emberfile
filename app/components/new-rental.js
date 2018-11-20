import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({

  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },
    saveRental1() {
      var params = {
        owner: this.get('author'),
        city: this.get('pictureUrl'),
        type: this.get('Books'),
      };
      this.set('addNewRental', false);
      this.sendAction('saveRental2', params);
    }
  }

});
