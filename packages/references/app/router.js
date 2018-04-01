import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('test-route', { path: '/test' }, function() {
    this.route('child', { path: '/user/:child_id'});
  });
});

export default Router;
