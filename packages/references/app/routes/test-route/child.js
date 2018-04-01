import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    console.log('>>>>', this.paramsFor(this.routeName));
    let users = this.modelFor('test-route');
    let usersLength = users.length;
    let numbers = [ 0,1,2,3,4,5,6,7,8,9 ]
    let userId = +params.child_id;
    let user = users.findBy('id', userId);
    let nextUser = userId+1 < usersLength ? users.findBy('id', ++userId) : user;
    return RSVP.hash({
      usersLength,
      user,
      nextUser,
      numbers
    });
  },
});
