import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { auth, db } from "./src/app/firebase.js";
import { loginCheck } from "./src/app/loginCheck.js";
import { setupPosts } from "./src/app/postList.js";

import './src/app/signupForm.js'
import './src/app/signinForm.js'
import './src/app/googleLogin.js'
import './src/app/facebookLogin.js'
import './src/app/githubLogin.js'
import './src/app/logout.js'
import './src/app/postList.js'

// list for auth state changes
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user);
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setupPosts(querySnapshot.docs);
    } catch (error) {
      console.log(error)
    }
  } else {
    setupPosts([]);
    loginCheck(user);
  }
});