import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCyowGCwzl8dqz4zTyJdx-SxXeEqRfzm8",
    authDomain: "twitter-clone-6c078.firebaseapp.com",
    projectId: "twitter-clone-6c078",
    storageBucket: "twitter-clone-6c078.appspot.com",
    messagingSenderId: "879178405492",
    appId: "1:879178405492:web:367f23d866bd9aeb5ea321",
    measurementId: "G-66LC3SRD6C"
  };
  const firebaseApp = firebase.initializeApp(firebase)

  const db = firebaseApp.firestore()

  export default db;