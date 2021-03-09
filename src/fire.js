 import firebase from'firebase'
 var firebaseConfig = {
    apiKey: "AIzaSyDzU3XcA0kDU7EwFoy9ODbWCHp7Yu5v4VE",
    authDomain: "e-commerce-ec757.firebaseapp.com",
    projectId: "e-commerce-ec757",
    storageBucket: "e-commerce-ec757.appspot.com",
    messagingSenderId: "683261133320",
    appId: "1:683261133320:web:b77e309a051b8b5a5747bd"
  };
 
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
