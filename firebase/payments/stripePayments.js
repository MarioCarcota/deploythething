import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";

export const getCheckoutUrl = async (app, priceId, billing) => {
  const auth = getAuth(app);
  const userId = auth.currentUser?.uid;
  if (!userId) throw new Error("User is not authenticated");

  const db = getFirestore(app);
  const checkoutSessionRef = collection(
    db,
    "users",
    userId,
    "checkout_sessions"
  );

  if (billing === "monthly") {

    const docRef = await addDoc(checkoutSessionRef, {
      price: priceId,
      allow_promotion_codes: true,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
      promotion_code: "promo_1P5pH7AH05U8fvyF9MjGysnx"
    });

    return new Promise((resolve, reject) => {
      const unsubscribe = onSnapshot(docRef, (snap) => {
        const { error, url } = snap.data() || {};
        if (error) {
          unsubscribe();
          reject(new Error(`An error occurred: ${error.message}`));
        }
        if (url) {
          console.log("Stripe Checkout URL:", url);
          unsubscribe();
          resolve(url);
        }
      });
    });

  } else {

    const docRef = await addDoc(checkoutSessionRef, {
      price: priceId,
      allow_promotion_codes: true,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    return new Promise((resolve, reject) => {
      const unsubscribe = onSnapshot(docRef, (snap) => {
        const { error, url } = snap.data() || {};
        if (error) {
          unsubscribe();
          reject(new Error(`An error occurred: ${error.message}`));
        }
        if (url) {
          console.log("Stripe Checkout URL:", url);
          unsubscribe();
          resolve(url);
        }
      });
    });

  }


};

export const getPortalUrl = async (app) => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  let dataWithUrl;
  try {
    const functions = getFunctions(app, "europe-west2");
    const functionRef = httpsCallable(
      functions,
      "ext-firestore-stripe-payments-createPortalLink"
    );
    const { data } = await functionRef({
      customerId: user?.uid,
      returnUrl: window.location.origin,
    });

    dataWithUrl = data;
    console.log("Reroute to Stripe portal: ", dataWithUrl.url);
  } catch (error) {
    console.error(error);
  }

  return new Promise((resolve, reject) => {
    if (dataWithUrl?.url) {
      resolve(dataWithUrl.url);
    } else {
      reject(new Error("No url returned"));
    }
  });
};
