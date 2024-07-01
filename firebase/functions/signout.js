import { getAuth, signOut } from "firebase/auth";

export default function LogsignOut() {

  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

}
