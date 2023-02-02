import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Chat from './components/Chat';
import Test from './components/Test';

function App() {

  const [user] = useAuthState(auth);
  console.log(user)

  return (
    <div className="App">
     <Navbar />
     {user ? <Chat /> : null}
    
     

    </div>
  );
}

export default App;
