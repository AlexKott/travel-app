import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
    authorize(xhr, requestOptions) {
        const accessToken = this.get('session.content.secure.token');
        if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
            xhr.setRequestHeader('x-access-token', accessToken);
        }
    }
});
