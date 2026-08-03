import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDcR8V986QrxfLRynWZHC_05xIHX7fvBt0",
  authDomain: "nexa-70fc4.firebaseapp.com",
  projectId: "nexa-70fc4",
  storageBucket: "nexa-70fc4.firebasestorage.app",
  messagingSenderId: "905166333298",
  appId: "1:905166333298:web:d55fdc338a53fdf236a9eb",
  measurementId: "G-F598Y65CZC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const chatList = document.getElementById("chatList");

async function loadUsers() {

  chatList.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "users"));

  querySnapshot.forEach((doc) => {

    const user = doc.data();

    chatList.innerHTML += `
      <div class="chat">
        <h3>${user.email}</h3>
        <p>まだメッセージはありません</p>
      </div>
    `;

  });

}

loadUsers();
