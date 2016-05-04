import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
    tokenEndpoint: 'https://murmuring-harbor-61969.herokuapp.com/authenticate',
    restore(data) {
        return new Ember.RSVP.Promise( (resolve, reject) => {
            if (!Ember.isEmpty(data.token)) {
                resolve(data);
            } else {
                reject();
            }
        });
    },
    authenticate(options) {
        return new Ember.RSVP.Promise( (resolve, reject) => {
            Ember.$.ajax({
                url: this.tokenEndpoint,
                type: 'POST',
                data: JSON.stringify({ name: 'traveller', password: 'voyage' }), // TODO: get login data
                contentType: 'application/json;charset=utf-8',
                dataType: 'json'
            }).then( (response) => {
                Ember.run( () => {
                    resolve({ token: response.data.token });
                });
            }, (xhr, status, error) => {
                Ember.run( () => {
                    reject(xhr.responseText);
                });
            });
        });
    },
    invalidate() {
        return Ember.RSVP.resolve();
    }
});
