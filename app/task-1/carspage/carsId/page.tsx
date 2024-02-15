"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function SingleCar() {
    const query = useSearchParams()
    const id = query.get("id")
  return (
    <div className='min-h-screen'>
        Cars Id :{id}
    </div>
  )
}
