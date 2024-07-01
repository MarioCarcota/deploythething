"use client"

import React from 'react';
import {
  onAuthStateChanged,
  getAuth,
} from 'firebase/auth';
import firebase_app, { db } from '@/firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { usePathname, useRouter } from 'next/navigation';
import { getPremiumStatus } from './payments/checkerPayments';

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);




export const AuthContextProvider = ({ children, }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const currentPath = usePathname();
  const router = useRouter();



  async function checkUser(userData) {

    const docRef = doc(db, `users/`, userData.uid);
    const querySnapshot = await getDoc(docRef);
    const data = querySnapshot.data()

    // const checkPayments = async () => {
    //   const newStatus = auth.currentUser
    //     ? await getPremiumStatus(firebase_app)
    //     : false;
    //   return newStatus;
    // }

    // const verify = await checkPayments();


    // if (data.fullName !== null && data.fullName !== undefined) {

    //   if (verify === false) {
    //     router.push("/payments");
    //     return;
    //   }

    //   if (currentPath.includes("payments") && verify !== undefined) {
    //     router.push("/admin");
    //     return;
    //   }


    //   if (currentPath.includes("onboarding") || currentPath === "/" || currentPath.includes("login")) {
    //     router.push("/admin");
    //     return;
    //   }

    //   return;
    // } else {

    //   if (!currentPath.includes("onboarding") && !currentPath === "/") {
    //     router.push("/onboarding/");
    //     return;
    //   }

    //   return;
    // }


  }


  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        setUser(user);
        checkUser(user)


      } else {
        setUser(null);

        if (
          !currentPath.includes("login") &&
          !currentPath.includes("sign-up") &&
          currentPath !== "/" &&
          !currentPath.includes("recovery-password") &&
          !currentPath.includes("faq")
        ) {
          router.push("/");
        }
      }

      setTimeout(() => {
        setLoading(false);
      }, 500);
    });

    return () => unsubscribe();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, router, user]);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <></> : children}
    </AuthContext.Provider>
  );
};