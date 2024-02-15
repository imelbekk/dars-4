"use client"
import Link from "next/link";
import React, { useState } from "react";

export default function Product() {
  const [id, setId]  = useState('')
  return (
    <div className="min-h-screen">
      <h6 className="w-full font-bold text-3xl text-center ">Product</h6>
      <div className="m-[50px] font-bold flex flex-col gap-[10px] ">
          <div className="flex">
          <h6>/productId/</h6>
          <input type="number" placeholder="enter id" className="px-[10px]" onChange={(e)=>setId(e.target.value)}/>
          <Link href={{ pathname: '/product/productId', query: { id: id  } }} className="mx-[10px]">Go to Page</Link>
          </div>
      </div>
    </div>
  );
}
