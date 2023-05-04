import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAmtUY8n4xUuX1Lo8xEPIK2sgsYwBmVF8s",
    authDomain: "ecommerce-db-97bf3.firebaseapp.com",
    projectId: "ecommerce-db-97bf3",
    storageBucket: "ecommerce-db-97bf3.appspot.com",
    messagingSenderId: "559208050",
    appId: "1:559208050:web:5ddfa7b35edfc2f67254eb"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth= getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists);
  };