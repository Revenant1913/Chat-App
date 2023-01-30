import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import React from 'react';
import GoogleButton from 'react-google-button';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)

}


const LogOut = () => {
    const signOut = () =>{
        signOut(auth)
    }
    return(
        <button onClick={() => auth.signOut()}>Logout</button>
    )
}

const SignIn = () => {
    const [user] = useAuthState(auth)
    return(
        <div>
            {user ? <LogOut /> : <GoogleButton onClick={googleSignIn} />}
            
            
        </div>
    )
}


export default SignIn;