import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD1JW55Q2HwrW9y97Ezrj23yxm23fR77z8",
    authDomain: "linkedin-clone-f98e3.firebaseapp.com",
    projectId: "linkedin-clone-f98e3",
    storageBucket: "linkedin-clone-f98e3.appspot.com",
    messagingSenderId: "874047430470",
    appId: "1:874047430470:web:117f4adacecb3372af0f47"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}; 