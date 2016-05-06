import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    saveCountry(country) {
      let newCountry = this.get('store').createRecord('country', {
        nameEnglish: country.nameEnglish,
        nameLocal: country.nameLocal,
        description: country.description
      });
      newCountry.save();
    }
  }
});
