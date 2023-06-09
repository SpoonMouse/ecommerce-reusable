import { initializeApp } from 'firebase/app';
import { getAuth, 
         signInWithPopup, 
         signInWithRedirect, 
         GoogleAuthProvider, 
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut
        } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAmtUY8n4xUuX1Lo8xEPIK2sgsYwBmVF8s",
    authDomain: "ecommerce-db-97bf3.firebaseapp.com",
    projectId: "ecommerce-db-97bf3",
    storageBucket: "ecommerce-db-97bf3.appspot.com",
    messagingSenderId: "559208050",
    appId: "1:559208050:web:5ddfa7b35edfc2f67254eb"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth= getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName, 
          email,
          createdAt,
          ...additionalInformation,
        })
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }

    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
  }

  export const signOutUser = async () => await signOut(auth);