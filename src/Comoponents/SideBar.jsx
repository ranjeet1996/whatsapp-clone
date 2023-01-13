import React, { useState } from "react";
import TollIcon from "@mui/icons-material/Toll";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import "./sideBar.css";
import { UserProfile } from "./UserProfile";
import { useEffect } from "react";
import db from "../firebase";

export function SideBar({currentUser,signOut}) {

  const [allUsers,setAllUsers]=useState([]);
  const[searchInput,setSearchInput]=useState("");
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const data = await db.collection("users").onSnapshot((snapshot) => {
        setAllUsers(
          snapshot.docs.filter((doc) => doc.data().email !== currentUser?.email)
        );
      });
    };

    // const getFriends = async () => {
    //   const data = await db
    //     .collection("Friendlist")
    //     .doc(currentUser.email)
    //     .collection("list")
    //     .onSnapshot((snapshot) => {
    //       setFriendList(snapshot.docs);
    //     });
    // };

    getAllUsers();
    // getFriends();
  }, []);

  const searchedUser = allUsers.filter((user) => {
    if (searchInput) {
      if (
        user.data().fullname.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return user;
      }
    }
  });

  const searchItem = searchedUser.map((user) => {
    return (
      <UserProfile
        name={user.data().fullname}
        photoURL={user.data().photoURL}
        key={user.id}
      />
    );
  });


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
            <input type="text" name="seach" placeholder="Search..."
              value={searchInput} onChange={e=>setSearchInput(e.target.value)}
            />
        </div>
      </div>
      <div className="sidebar-chat-list">
      {
        searchItem.length>0 ? (
          searchItem 
          ):(
          <UserProfile name="Chandan" photoURL={"./user.png"}/>
        )}
      </div>
    </div>
  );
}
