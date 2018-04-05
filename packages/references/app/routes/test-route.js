import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export let users = [
    {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
    },
    {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv"
    },
    {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net"
    },
    {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org"
    },
    {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca"
    },
    {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info"
    },
    {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz"
    },
    {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me"
    },
    {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io"
    },
    {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz"
    }
];

let posts = [
  { 
    'author':'Brian Kim',
    'title': 'bar-component: Post Number One',
    'body':"This is the post's bosy",
    'componentName': 'bar-component'
  },
  {
    'author':'Jake Archibad',
    'title': 'foo-component: Post Number Two',
    'body':"This is the post's bosy",
    'componentName': 'foo-component'
  },
  {
    'author':'Ken Kenny',
    'title': 'bar-component: Post Number Three',
    'body':"This is the post's body",
    'componentName': 'bar-component'
  }
]

export default Route.extend({
  model() {
    return RSVP.hash({
      users,
      posts
    })
  }
});