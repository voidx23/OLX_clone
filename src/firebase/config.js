import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCIs9qsJ40-my2NyYUEVaUt4A1LhZmczrw",
    authDomain: "fir-857c6.firebaseapp.com",
    projectId: "fir-857c6",
    storageBucket: "fir-857c6.appspot.com",
    messagingSenderId: "662074196740",
    appId: "1:662074196740:web:0b4a4c9623f1c021dec651",
    measurementId: "G-VQ0S32BFNW"
  };

  export default firebase.initializeApp(firebaseConfig)