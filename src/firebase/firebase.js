import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAlyr6EJcyFmy9_hXzBwzpaizy0jywEwRA",
  authDomain: "expensify-3f3bd.firebaseapp.com",
  databaseURL: "https://expensify-3f3bd.firebaseio.com",
  projectId: "expensify-3f3bd",
  storageBucket: "expensify-3f3bd.appspot.com",
  messagingSenderId: "313793144500"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Georgie McDoodle',
  age: 88,
  isSingle: true,
  location: {
    city: 'Whoville',
    country: 'Bizlandia'
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('This failed. ', e);
});

// database.ref().set('This is my data.');

// database.ref('age').set(69);
// database.ref('location/city').set('Whyville');

database.ref('attributes').set({
  height: 844,
  weight: 884443
}).then(() => {
  console.log('Attributes have been set');
}).catch((e) => {
  console.log('This has failed. ', e);
});
