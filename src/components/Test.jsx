import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getFirestore } from "firebase/firestore";
import {db} from '../firebase'

const ChatMessage = (props) => {
    const { text, uid } = props.message

    return <p>{text}</p>
}


const Test = () => {
    const messagesRef = db.collection('messages');
    const query = messagesRef.orderBy('timestamp')

    const [messages] = useCollectionData(query, {idField: 'id'})

    return(
        <div>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        </div>
    )
}


export default Test;