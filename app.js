import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-analytics.js";

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

console.log("NEXA");
console.log("Firebase接続成功");
