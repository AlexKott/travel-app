import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  didInsertElement() {
    console.log(this.get('cities').objectAt(0));
    console.log(this.get('cities').objectAt(0).get('country'));
  }
});
