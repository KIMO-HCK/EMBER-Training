import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    return this.store.query("post", {
        userId: params.user_id
    });
  },
  afterModel() {
    this._super(...arguments);
  }
});
