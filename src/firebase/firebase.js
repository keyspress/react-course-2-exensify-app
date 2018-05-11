import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// // });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });

// database.ref('expenses').push({
//   description: 'Cupie Doll',
//   note: 'Do not steal',
//   amount: 800,
//   createdAt: 1000
// });




// // database.ref('notes/-LC9Rc1z6-e8fZ770GGq').remove();

// // database.ref('notes').push({
// //   title: 'topics',
// //   body: 'things, stuff, items'
// // });


// // const watch = database.ref().on('value', (snapshot) => {
// //   const person = snapshot.val();
// //   console.log(`${person.name} is a ${person.job.title} at ${person.job.company}.`);
// // });

// // setTimeout(() => {
// //   database.ref('name').set('Georgie Porgie McDoodle');
// // }, 3000)

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log('error with data fetching', e);
// // });

// // setTimeout(() => {
// //   database.ref('age').set(68);
// // }, 3500);

// // setTimeout(() => {
// //   database.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //   database.ref('age').set(67);
// // }, 10500);

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('error fetching data', e);
// //   });

// // database.ref().set({
// //   name: 'Georgie McDoodle',
// //   age: 88,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Wanderer',
// //     company: 'Government'
// //   },
// //   location: {
// //     city: 'Whoville',
// //     country: 'Bizlandia'
// //   }
// // }).then(() => {
// //   console.log('Data is saved!');
// // }).catch((e) => {
// //   console.log('This failed. ', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Apple',
// //   'location/city': 'Whereville'
// // });

// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('data was removed');
// //   }).catch((e) => {
// //     console.log('did not remove data', e);
// //   });

// // database.ref('isSingle').set(null);