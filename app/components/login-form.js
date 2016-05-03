import Ember from 'ember';

export default Ember.Component.extend({
    authenticator: 'authenticator:custom',
    session: Ember.inject.service(),
    actions: {
        authenticate() {
            this.get('session').authenticate('authenticator:custom').catch( (message) => {
                console.error(message);
            })
        }
    }
});
