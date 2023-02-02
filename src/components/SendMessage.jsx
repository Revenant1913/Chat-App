import { serverTimestamp, addDoc, collection } from 'firebase/firestore';
import React, {useState} from 'react';
import {auth, db} from '../firebase';

const SendMessage = () => {

    const [input, setInput] = useState('');

    const sendMessage = async (e) =>{
        e.preventDefault()
        if (input === '') {
            alert('Blank Space')
            return
        }
        const {uid, displayName} = auth.currentUser;
        //creatingdatabase 
        await addDoc(collection(db, 'messages'), {
            text : input,
            name : displayName,
            uid,
            timestamp: serverTimestamp()

        })
        setInput('')
    }

    return(
        <div>
            <form onSubmit={sendMessage}>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='message' />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default SendMessage;