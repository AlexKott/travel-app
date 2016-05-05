import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    saveCity(city) {
      let newCity = this.get('store').createRecord('city', {
        nameEnglish: city.nameEnglish,
        nameLocal: city.nameLocal,
        description: city.description
      });
      console.log(newCity.nameEnglish)
      console.log(newCity)
      newCity.save();
    }
  }
});
