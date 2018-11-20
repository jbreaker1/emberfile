import Component from '@ember/component';

export default Component.extend({
  isWide: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    },
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        rental.destroyRecord();
      }
    }
  }
});
