import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  nameLocal: attr('string'),
  nameEnglish: attr('string'),
  description: attr('string'),
  publicTransport: attr('string'),
  position: attr(),
  safetyRating: attr(),

  country: belongsTo('country', {
    inverse: 'cities',
    async: true
  }),
  // region: belongsTo('region'),
  // locations: hasMany('location')
});
