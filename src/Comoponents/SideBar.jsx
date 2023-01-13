import React from "react";
import TollIcon from "@mui/icons-material/Toll";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import "./sideBar.css";
import { UserProfile } from "./UserProfile";

export function SideBar({currentUser,signOut}) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-img" onClick={signOut}>
          <img src={currentUser?.photoURL} alt="" />
        </div>
        <div className="sidebar-header-btn">
          <TollIcon />
          <InsertCommentIcon />
          <MoreVertIcon />
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-search-input">
            <SearchIcon/>
            <input type="text" name="seach" placeholder="Search..."/>
        </div>
      </div>
      <div className="sidebar-chat-list">
        <UserProfile name="Ranjeet" photoURL="./user.png"/>
        <UserProfile name="Rakhi" photoURL="./user.png"/>
        <UserProfile name="Ajeet" photoURL="./user.png"/>
        <UserProfile name="Chandan" photoURL="./user.png"/>
        <UserProfile name="Anand" photoURL="./user.png"/>
        <UserProfile name="Roushni" photoURL="./user.png"/>
        <UserProfile name="papa" photoURL="./user.png"/>
        <UserProfile name="mummy" photoURL="./user.png"/>
        <UserProfile name="rama" photoURL="./user.png"/>
        <UserProfile name="rohit" photoURL="./user.png"/>
        <UserProfile name="sanjeev" photoURL="./user.png"/>
      </div>
    </div>
  );
}
