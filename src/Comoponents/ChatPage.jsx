import React from "react";
import { Chatcontainer } from "./Chatcontainer";
import { SideBar } from "./SideBar";
import "./ChatPage.css";

export function ChatPage() {
  return (
    <div className="chatpage">
      <div className="chatpage-container">
        {/* sideBar */}
        <SideBar />
        {/* chatcontainer */}
        <Chatcontainer />
      </div>
    </div>
  );
}
