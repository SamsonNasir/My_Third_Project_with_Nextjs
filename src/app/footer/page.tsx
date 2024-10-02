"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
const Footer = ()=>{
    const router = useRouter();
  return (
    <div>
    <h1>This is a Footer page</h1>
    <button onClick={()=>router.push('/')}>return to homepage</button>
    </div>
  )
};

export default Footer