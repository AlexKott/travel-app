import Ember from 'ember';

// will become a routable component later
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
      newCity.save().catch( (err) => {
        newCity.deleteRecord();
        this.set('errorMessage', err.errors[0].detail);
      });
    }
  },
  errorMessage: ''
});
