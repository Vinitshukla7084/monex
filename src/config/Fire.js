import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAXj_qWTiSDg7PdQNzaNp7Di07-2weixZs",
  authDomain: "monex-2-9c6cb.firebaseapp.com",
  projectId: "monex-2-9c6cb",
  storageBucket: "monex-2-9c6cb.appspot.com",
  messagingSenderId: "800546295245",
  appId: "1:800546295245:web:00a5fa6f5ea3db7fce8884"
};

const fire = firebase.initializeApp(config);
export default fire;