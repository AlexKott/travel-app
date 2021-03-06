import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from '../config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:custom',
  host: ENV.host,

  shouldReloadRecord() {
    return false;
  },
  shouldReloadAll() {
    return false;
  },
  shouldBackgroundReloadRecord() {
    return true;
  },
  shouldBackgroundReloadAll() {
    return true;
  }
});
