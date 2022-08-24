import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAFT24wfdGWSw0YJ4vQBvlm6QbhEqp7yXg",
  authDomain: "monex-c7333.firebaseapp.com",
  projectId: "monex-c7333",
  storageBucket: "monex-c7333.appspot.com",
  messagingSenderId: "172874523308",
  appId: "1:172874523308:web:3712c6fb3f6f2232ae7509"
};

const fire = firebase.initializeApp(config);
export default fire;