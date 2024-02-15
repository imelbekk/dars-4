"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function SingleCar() {
    const query = useSearchParams()
    const id = query.get("id")
  return (
    <div className='min-h-screen'>
      <h6 className="w-full font-bold text-3xl text-center ">Product Id :({id})</h6>
      <div className="m-[50px] font-bold flex flex-col gap-[10px]">
            <Link href={`/product/productId/settings`}>/settings</Link>
        </div>
    </div>
  )
}

