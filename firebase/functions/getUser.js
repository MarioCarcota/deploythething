import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../config";
import { deleteUser } from "firebase/auth";

export default async function fetchUser(user) {

  // Query all documents in the "locali" collection
  const userD = await getDoc(doc(db, "users/", user.uid));

  const userData = userD.data();


  return userData;
}

export async function deleteUserData(user) {


  await deleteDoc(doc(db, "users/", user.uid));

  return true;
}
