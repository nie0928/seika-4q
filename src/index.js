import { auth } from "./firebase"; // firebase.jsからauthをインポート
import { signInWithEmailAndPassword } from "firebase/auth";

document.addEventListener("DOMContentLoaded", () => {
  // フォーム要素を取得
  const formSignIn = document.getElementById("form-sign-in");

  if (!formSignIn) {
    console.error("フォームが見つかりません。HTMLのIDが正しいか確認してください。");
    return;
  }

  console.log("フォーム取得成功:", formSignIn);

  // サインイン処理
  formSignIn.onsubmit = async (event) => {
    event.preventDefault();
    console.log("サインイン処理開始");

    const formData = new FormData(event.target);
    const email = formData.get("id");
    const password = formData.get("pass");

    console.log("入力されたデータ:", { email, password });

    try {
      // Firebase Authenticationでサインイン
      await signInWithEmailAndPassword(auth, email, password);
      console.log("サインイン成功");
      window.location.assign("favorite.html"); // サインイン成功後にfavorite.htmlへリダイレクト
    } catch (error) {
      console.error("サインイン失敗:", error.message);
    }

    console.log("サインイン処理終了");
  };
});
