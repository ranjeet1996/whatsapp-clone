import React from 'react'
import "./Chatcontainer.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { ChatMessage } from './ChatMessage';

export function Chatcontainer() {
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
            <div className="chat-input-btn">
            <InsertEmoticonIcon/>
            <AttachFileIcon/>
            </div>
              {/* text input element */}
              <form>
                <input type="text" placeholder='Type a Message' />
              </form>
              {/* send button */}
              <div className="chat-input-send-btn">
                <SendIcon/>
              </div>
        </div>
    </div>
  )
}

