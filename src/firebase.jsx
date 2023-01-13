import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAVbb40PUdVE5gHxDoMXXHf1Tv7mkkegLI",
  authDomain: "whatsapp-clone-a9a99.firebaseapp.com",
  projectId: "whatsapp-clone-a9a99",
  storageBucket: "whatsapp-clone-a9a99.appspot.com",
  messagingSenderId: "532746691097",
  appId: "1:532746691097:web:a1f9a63e93c65bd5670088",
  measurementId: "G-FEJ70EVYNS",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
