import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-analytics.js";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";


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
const analytics = getAnalytics(app);

const auth = getAuth(app);


console.log("NEXA");
console.log("Firebase接続成功");


// 新規登録
document.getElementById("signup").addEventListener("click", () => {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("message").textContent = "登録成功！";
    })
    .catch((error) => {
      document.getElementById("message").textContent = error.message;
    });

});


// ログイン
document.getElementById("login").addEventListener("click", () => {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("message").textContent = "ログイン成功！";
    })
    .catch((error) => {
      document.getElementById("message").textContent = error.message;
    });

});
