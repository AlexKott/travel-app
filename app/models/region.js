import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  notable: attr(),

  countries: hasMany('country'),
  cities: hasMany('city'),
  locations: hasMany('location')
});
