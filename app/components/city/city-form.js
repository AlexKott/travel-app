import Ember from 'ember';

export default Ember.Component.extend({
  city: {},
  actions: {
    selectCountry(countryId) {
      this.get('city').country = countryId;
    }
  }
});
