import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | test-route/child', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:test-route/child');
    assert.ok(route);
  });
});
