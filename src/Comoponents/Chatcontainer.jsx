import React, { useEffect, useRef } from "react";
import "./Chatcontainer.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { ChatMessage } from './ChatMessage';
import { useState } from 'react';
import Picker from 'emoji-picker-react';
import { useParams } from 'react-router-dom';
import db from "../firebase";
import firebase from "firebase";


export function Chatcontainer({currentUser}) {

  const[message,setMessage]=useState("");
  const[openEmojiBox,setOpenEmojiBox]=useState(false);
  const {emailID}=useParams();
  const [chatUser, setChatUser] = useState({});
  const [chatMessages, setChatMessages] = useState([]);
  

  useEffect(() => {
    const getUser = async () => {
      const data = await db
        .collection("users")
        .doc(emailID)
        .onSnapshot((snapshot) => {
          setChatUser(snapshot.data());
        });
    };
    const getMessages = async () => {
      const data = await db
        .collection("chats")
        .doc(emailID)
        .collection("messages")
        .orderBy("timeStamp", "asc")
        .onSnapshot((snapshot) => {
          let messages = snapshot.docs.map((doc) => doc.data());

          let newMessage = messages.filter(
            (message) =>
              message.senderEmail === (currentUser.email || emailID) ||
              message.receiverEmail === (currentUser.email || emailID)
          );

          setChatMessages(newMessage);
        });
    };
    getUser();
    getMessages();
  },[]);


  const send = (e) => {
    e.preventDefault();

    if (emailID) {
      let payload = {
        text: message,
        senderEmail: currentUser.email,
        receiverEmail: emailID,
        timeStamp: firebase.firestore.Timestamp.now(),
      };
      // sender
      db.collection("chats")
      .doc(currentUser.email)
      .collection("messages")
      .add(payload);
         // reciever
         db.collection("chats").doc(emailID).collection("messages").add(payload);

         db.collection("Friendlist")
         .doc(currentUser.email)
         .collection("list")
         .doc(emailID)
         .set({
           email: chatUser.email,
           fullname: chatUser.fullname,
           photoURL: chatUser.photoURL,
           lastMessage: message,
         });
         db.collection("Friendlist")
        .doc(emailID)
        .collection("list")
        .doc(currentUser.email)
        .set({
          email: currentUser.email,
          fullname: currentUser.fullname,
          photoURL: currentUser.photoURL,
          lastMessage: message,
        });

      setMessage("");
    }
  }



  return (
    <div className='chat-container'>
        <div className="chat-container-header">
            <div className="chat-user-info">
                <div className="chat-user-img">
                    <img src={chatUser?.photoURL} alt="" />
                </div>
                <p>{chatUser?.fullname}</p>
            </div>
            <div className="chat-container-header-btn">
                <MoreVertIcon/>
            </div>
        </div>
        <div className="chat-display-container">
        {chatMessages.map((message) => (
          <ChatMessage
            message={message.text}
            time={message.timeStamp}
            sender={message.senderEmail}
          />
        ))}
        </div>
        {/* chatinput */}
        <div className="chat-input">
            {/* button */}
            {openEmojiBox && <Picker onEmojiClick={(event,emojiData)=>
              setMessage(message+emojiData.emoji)
            }/>}
            <div className="chat-input-btn">
            <InsertEmoticonIcon onClick={()=>setOpenEmojiBox(!openEmojiBox)}/>
            <AttachFileIcon/>
            </div>
              {/* text input element */}
              <form onSubmit={send}>
                <input type="text" placeholder='Type a Message' value={message} onChange={(e)=>{
                  setMessage(e.target.value);
                }}/>
              </form>
              {/* send button */}
              <div className="chat-input-send-btn" onClick={send}>
                <SendIcon/>
              </div>
        </div>
    </div>
  )
}

