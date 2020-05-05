import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDJRJ3oklYKCzqEha5gJ_CCV9HNI2m0MdE",
    authDomain: "react-practice-crwn-db.firebaseapp.com",
    databaseURL: "https://react-practice-crwn-db.firebaseio.com",
    projectId: "react-practice-crwn-db",
    storageBucket: "react-practice-crwn-db.appspot.com",
    messagingSenderId: "192604733695",
    appId: "1:192604733695:web:6865a941389b4e2b9eccca",
    measurementId: "G-VK831DYRKC"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase