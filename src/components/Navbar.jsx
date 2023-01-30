import React, { Component } from 'react';
import {auth} from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './SignIn'


const Navbar = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>Chat App</h1>
            <SignIn />
            
        </div>
    )
}

export default Navbar;