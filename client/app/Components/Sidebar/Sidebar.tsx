import React from "react";
import Profile from "../Profile/Profile";
import RadialChart from "../RadialChart/RadialChart";

function Sidebar() {
  return (
    <div className="w-[20rem] mt-[5rem] h-[calc(100%-5rem)] fixed right-0 top-0 bg-[#f9f9f9] flex flex-col">
      <Profile />
      <div className="mt-4 mx-6">
        <RadialChart />
      </div>
    </div>
  );
}

export default Sidebar;
