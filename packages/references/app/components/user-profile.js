import Component from '@ember/component';
import RSVP from 'rsvp';

export default Component.extend({
  actions: {
    userDidDeleteAccount() {
      let deferred = RSVP.defer();
      return deferred.resolve('Account Deleted');
    }
  }
});
