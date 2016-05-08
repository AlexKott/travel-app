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
    this.route('city', { path: ':city_id' });
  });
  this.route('countries', function () {
    this.route('index', { path: '/' });
    this.route('new');
    this.route('country', { path: ':country_id'} );
  });
  this.route('currencies', function () {
    this.route('index', { path: '/' });
    this.route('new');
    this.route('currency', { path: ':currency_id'} );
  });
  this.route('languages', function () {
    this.route('index', { path: '/' });
    this.route('new');
    this.route('language', { path: ':language_id'} );
  });
  this.route('locations', function () {
    this.route('index', { path: '/' });
    this.route('new');
    this.route('location', { path: ':location_id'} );
  });
  this.route('regions', function () {
    this.route('index', { path: '/' });
    this.route('new');
    this.route('region', { path: ':region_id'} );
  });
});

export default Router;
