import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');

  this.route('cities', function () {
    this.route('index', { path: '/' });
    this.route('new');
  });
  this.route('city', { path: '/cities/:city_id' }, function () {
    this.route('edit');
  });

  this.route('countries', function () {
    this.route('index', { path: '/' });
    this.route('new');
  });
  this.route('country', { path: 'countries/:country_id' });
});

export default Router;
