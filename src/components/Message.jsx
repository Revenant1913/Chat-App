import React from 'react';
import {auth} from '../firebase'

const Message = ({message}) => {
    return (
        <div>
            <p>{message.name}</p>
            <h4>{message.text}</h4>
        </div>
    )
}

export default Message;