import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAUKyXxU47CaiVi8IAoYqswVoJxwdV1p-w',
  authDomain: 'kitchen-fire-db5b2.firebaseapp.com',
  databaseURL: 'https://kitchen-fire-db5b2.firebaseio.com',
  projectId: 'kitchen-fire-db5b2',
  storageBucket: 'kitchen-fire-db5b2.appspot.com',
  messagingSenderId: '22825699303'
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
