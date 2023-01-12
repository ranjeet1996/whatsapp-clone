import React from "react";
import { SideBar } from "./SideBar";
import "./Home.css";

export function Home() {
  return (
    <div className="home">
      <div className="home-container">
        {/* sideBar */}
        <SideBar />
        {/* a container with whatapp logo */}
        <div className="home-bg">
          <img src="./WhatsAppbg.png" alt="" />
        </div>
      </div>
    </div>
  );
}
