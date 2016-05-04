import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  session: Ember.inject.service(),
    authorize(sessionData, setHeader) {
        const accessToken = sessionData.token;
        if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
            setHeader('x-access-token', accessToken);
        }
    }
});
