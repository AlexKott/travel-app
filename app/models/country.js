import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  nameLocal: attr('string'),
  nameEnglish: attr('string'),
  description: attr('string'),
  flag: attr('string'),
  money: attr('string'),
  politics: attr('string'),
  importExport: attr('string'),
  culture: attr('string'),
  publicTransport: attr('string'),
  trafficRules: attr(),
  safetyRating: attr(),
  visaRegulations: attr(),
  health: attr(),
  emergencyNumbers: attr(),
  embassyAdresses: attr(),
  religions: attr(),
  events: attr(),
  links: attr(),

  capital: belongsTo('city'),
  cities: hasMany('city', {
    inverse: 'country'
  }),
  regions: hasMany('region'),
  locations: hasMany('location'),
  languagesOfficial: hasMany('language'),
  languagesMinority: hasMany('language'),
  currency: belongsTo('currency')
});
