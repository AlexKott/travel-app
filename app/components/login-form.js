import Ember from 'ember';

export default Ember.Component.extend({
    session: Ember.inject.service(),
    actions: {
        authenticate() {
            this.get('session').authenticate('authenticator:custom').catch( (message) => {
                console.error(message);
            });
        }
    }
});
