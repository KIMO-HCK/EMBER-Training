import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

let Todo = EmberObject.extend({
  title: null,
  isDone: false
});

let husband = EmberObject.create({
  pets: 0
});

let Wife = EmberObject.extend({
  pets: alias('husband.pets')
});

let wife = Wife.create({
  husband: husband
});

// Someone gets a pet.
husband.set('pets', 1);
wife.get('pets'); // 1

export default Component.extend({
  todos: null,
  wifePets: null,

  init() {
    this._super(...arguments);
    husband.set('pets', 5);
    this.set('wifePets', wife.get('pets'));
    this.set('todos', [
      Todo.create({ title: 'Buy food', isDone: true }),
      Todo.create({ title: 'Eat food', isDone: false }),
      Todo.create({ title: 'Catalog Tomster collection', isDone: true }),
    ]);
  },

  titles: computed('todos.[]', function() {
    let todos = this.get('todos');
    return todos.mapBy('title');
  })
  // incomplete: computed('todos.@each.isDone', function() {
  //   let todos = this.get('todos');
  //   return todos.filterBy('isDone', false);
  // })
});
