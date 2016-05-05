import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    saveCity(city) {
      const country = this.get('store').peekRecord('country', city.country);
      let newCity = this.get('store').createRecord('city', {
        nameEnglish: city.nameEnglish,
        nameLocal: city.nameLocal,
        description: city.description,
        publicTransport: city.publicTransport,
        country: country
      });
      newCity.save();
    }
  }
});
