
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAqmqmmJkAn5DvMKulpcGBMleSwZHjEeOE",
    authDomain: "making-2390c.firebaseapp.com",
    databaseURL: "https://making-2390c-default-rtdb.firebaseio.com",
    projectId: "making-2390c",
    storageBucket: "making-2390c.appspot.com",
    messagingSenderId: "460480114170",
    appId: "1:460480114170:web:f16fe5d02f259d08928843"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;