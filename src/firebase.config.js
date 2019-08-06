// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app -->
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaArhiSXyMgqraJZguajKLUizow_PT8d0",
  authDomain: "test-ec3b8.firebaseapp.com",
  databaseURL: "https://test-ec3b8.firebaseio.com",
  projectId: "test-ec3b8",
  storageBucket: "test-ec3b8.appspot.com",
  messagingSenderId: "222321285824",
  appId: "1:222321285824:web:e7dfcbd14e41f6d6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
// export const nameRef = firebase
//   .database()
//   .ref()
//   .child("Obj")
//   .child("name");
export const nameRef = database.ref("data/name");
