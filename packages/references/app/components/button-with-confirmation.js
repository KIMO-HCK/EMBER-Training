import Component from '@ember/component';

export default Component.extend({
  actions: {
    launchConfirmDialog() {
      this.set('confirmShown', true);
    },

    submitConfirm() {
      // call onConfirm with the value of the input field as an argument
      let promise = this.get('onConfirm')(this.get('confirmValue'));
      promise.then((val) => {
        alert('Msg:'+val);
        this.set('confirmShown', false);
      });
    },

    cancelConfirm() {
      this.set('confirmShown', false);
    }
  }
});
