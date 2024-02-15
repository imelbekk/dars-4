import Link from 'next/link'
import React from 'react'

export default function Cabinet() {
  return (
    <div className='min-h-screen'>
        <h6 className='w-full font-bold text-3xl text-center '>Cabinet</h6>
        <div className="m-[50px] font-bold flex flex-col gap-[10px]">
            <Link href={'/cabinet/settings'}>/settings</Link>
            <Link href={'/cabinet/dashboard'}>/dashboard</Link>
        </div>
    </div>
  )
}
