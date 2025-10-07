import React from "react";
import SideBar from "../navbars/SideBar";
import HeaderBar from "../navbars/HeaderBar";

function Layout({ link }) {
  return (
    <div className="mainContainer w-screen h-screen bg-white flex fixed ">
      {/* Sidebar */}
      <div className="w-[18%] h-full border-r border-gray-200 z-50">
        <SideBar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col w-full">
        <HeaderBar link={link} />
      </div>
    </div>
  );
}

export default Layout;
