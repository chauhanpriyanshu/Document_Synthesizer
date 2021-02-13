import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDV43w5ph2kyYgh405c99uf4DgcKRahyKg",
    authDomain: "documentsynthesizer.firebaseapp.com",
    projectId: "documentsynthesizer",
    storageBucket: "documentsynthesizer.appspot.com",
    messagingSenderId: "297951591308",
    appId: "1:297951591308:web:38ddf57fd659cbff9cb4a9"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;