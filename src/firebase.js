import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDhhndinWvRK67E70Hr70uFRIS0p4YFJ5A',
  authDomain: 'admin-bestfive-bcn.firebaseapp.com',
  databaseURL: 'https://admin-bestfive-bcn.firebaseio.com',
  projectId: 'admin-bestfive-bcn',
  storageBucket: 'admin-bestfive-bcn.appspot.com',
  messagingSenderId: '973888677382',
  appId: '1:973888677382:web:46370677cae0ff95a48587'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
