"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
const Contact = ()=>{ 
  const router = useRouter();
  return (
    <div>
    <h1>This is a contact page</h1>
    <br />
    <button onClick={()=>router.push('/')}>return to homepage</button>
    </div>
  )
};

export default Contact