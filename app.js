import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-analytics.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp
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

getAnalytics(app);

const auth = getAuth(app);

const db = getFirestore(app);


console.log("NEXA");
console.log("Firebase接続成功");
console.log("Firestore接続成功");


// エラー日本語化
function getErrorMessage(error) {

  switch (error.code) {

    case "auth/email-already-in-use":
      return "このメールアドレスはすでに登録されています";

    case "auth/invalid-email":
      return "メールアドレスの形式が正しくありません";

    case "auth/weak-password":
      return "パスワードは6文字以上にしてください";

    case "auth/invalid-credential":
      return "メールアドレスまたはパスワードが違います";

    default:
      return "エラーが発生しました";

  }

}


// 新規登録
const signupButton = document.getElementById("signup");


if (signupButton) {

  signupButton.addEventListener("click", async () => {


    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;


    try {

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );


      const user =
        userCredential.user;


      // Firestoreにユーザー保存
      try {

  await setDoc(
    doc(db, "users", user.uid),
    {
      email: user.email,
      createdAt: serverTimestamp()
    }
  );

  alert("Firestore保存成功！");

} catch (e) {

  alert("Firestore保存失敗: " + e.code + "\n" + e.message);

}

document.getElementById("message").textContent =
  "登録成功！";


    } catch(error) {

      document.getElementById("message").textContent =
        getErrorMessage(error);

    }


  });

}


// ログイン
const loginButton = document.getElementById("login");


if (loginButton) {

  loginButton.addEventListener("click", async () => {


    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;


    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );


      window.location.href =
        "home.html";


    } catch(error) {

      document.getElementById("message").textContent =
        getErrorMessage(error);

    }


  });

}
