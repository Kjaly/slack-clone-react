import React, {useState} from 'react';
import db from "../../../firebase";
import firebase from "firebase";
import {useStateValue} from "../../../StateProvider";
import './ChatInput.scss'


const ChatInput = ({channelId, channelName}) => {
    const [input, setInput] = useState('');
    const[{user}] = useStateValue();
    const sendMessage = e => {
        e.preventDefault();
        if (channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL
            })
            setInput('');
        }
    }
    return (
        <div className='chatInput'>
            <form>
                <input value={input} onChange={e => setInput(e.target.value)}
                       placeholder={`Message #${channelName?.toLowerCase()} `}/>
                <button type={'submit'} onClick={sendMessage}>SEND</button>
            </form>
        </div>
    );
};

export default ChatInput;