"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const About =() =>{
  const router=useRouter();
  return (
    <div> 
    <h1>This is a About page</h1>
    <br />
    <button onClick={()=>router.push('/')}>return to Homepage</button>
    </div>
  )
};

export default About