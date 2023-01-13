import React from 'react'
import "./Chatcontainer.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { ChatMessage } from './ChatMessage';
import { useState } from 'react';
import Picker from 'emoji-picker-react';
// import "./ChatMessage.css"

export function Chatcontainer() {

  const[message,setMessage]=useState("");
  const[openEmojiBox,setOpenEmojiBox]=useState(false);



  return (
    <div className='chat-container'>
        <div className="chat-container-header">
            <div className="chat-user-info">
                <div className="chat-user-img">
                    <img src="./user.png" alt="" />
                </div>
                <p>ranjeet</p>
            </div>
            <div className="chat-container-header-btn">
                <MoreVertIcon/>
            </div>
        </div>
        <div className="chat-display-container">
            <ChatMessage message="Hii,How are you" time="13-01-2023"/>
            <ChatMessage message="Hii,How are you" time="13-01-2023"/>
            <ChatMessage message="Hii,How are you" time="13-01-2023"/>
            <ChatMessage message="Hii,How are you" time="13-01-2023"/>
            <ChatMessage message="Hii,How are you" time="13-01-2023"/>
            <ChatMessage message="Hii,How are you" time="13-01-2023"/>
            <ChatMessage message="Hii,How are you" time="13-01-2023"/>
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
              <form>
                <input type="text" placeholder='Type a Message' value={message} onChange={(e)=>{
                  setMessage(e.target.value);
                }}/>
              </form>
              {/* send button */}
              <div className="chat-input-send-btn">
                <SendIcon/>
              </div>
        </div>
    </div>
  )
}

