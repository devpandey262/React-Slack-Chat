import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyAg4pvp84RIKcDx_wlQRJB1ixnJSwGDiyo",
  authDomain: "slackchat-c85b6.firebaseapp.com",
  databaseURL : "https://slackchat-c85b6-default-rtdb.firebaseio.com/",
  projectId: "slackchat-c85b6",
  storageBucket: "slackchat-c85b6.appspot.com",
  messagingSenderId: "99697525659",
  appId: "1:99697525659:web:5a96905968057b12f4573e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;