import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-screen w-full h-[100vh] flex flex-col">
      <div className="w-full h-[80px] flex justify-between items-center px-[50px] bg-indigo-600 text-[white]">
        <div className="flex gap-[10px] font-medium">
          <HomeIcon />
          <h6>Home Page</h6>
        </div>
        <Link href="/task-1" className="bg-white text-indigo-600 font-medium flex items-center justify-center rounded-[3px]  w-[150px] h-[30px]">Log In</Link>
      </div>
      <div className="m-[50px] font-bold flex flex-col gap-[10px]">
      <Link href={'/cabinet'}>/cabinet</Link>
      <Link href={'/product'}>/product</Link>
      </div>
    </div>
  );
}
