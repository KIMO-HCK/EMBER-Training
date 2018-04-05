import Component from '@ember/component';
import RSVP from 'rsvp';

export default Component.extend({
  actions: {
    sendMessage(messageType, messageText) {
      let deferred = RSVP.defer();
      deferred.resolve(messageText);
      return deferred.promise;
    }
  }
});
