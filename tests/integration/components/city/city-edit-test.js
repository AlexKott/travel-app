import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('city/city-edit', 'Integration | Component | city/city edit', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{city/city-edit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#city/city-edit}}
      template block text
    {{/city/city-edit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
