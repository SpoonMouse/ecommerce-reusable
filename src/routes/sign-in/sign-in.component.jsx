import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import SignUp from '../../components/sign-up/sign-up.component';

const SignIn = () => {


    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef =  await createUserDocumentFromAuth(user);
        
    }

  return (
    <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with google Popup</button>
        <SignUp />
    </div>
  )
}

export default SignIn