import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('cities');
  this.route('login');
  this.route('city', {path: '/cities/:city_id'});
  this.route('countries');
  this.route('country', {path: 'countries/:country_id'});
});

export default Router;
