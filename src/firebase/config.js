import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBenxQsFaNbVWatFGRv4nGNWAhUE-3yW3A",
    authDomain: "vuex-4-fb-auth-katerina-shche.firebaseapp.com",
    projectId: "vuex-4-fb-auth-katerina-shche",
    storageBucket: "vuex-4-fb-auth-katerina-shche.appspot.com",
    messagingSenderId: "1014918144551",
    appId: "1:1014918144551:web:422b5584e8946a3b3da402"
  };

  //init firebase

  initializeApp(firebaseConfig)

  //init firebase auth

  const auth = getAuth()

  export { auth }