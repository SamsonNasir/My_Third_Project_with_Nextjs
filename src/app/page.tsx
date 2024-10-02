"use client"
import {useRouter} from "next/navigation"
import Link from 'next/link'
import react from "react";

function Homepage (){
  const router = useRouter();
  return (
  <div>
    <h1>This is a home page</h1>
    <br />
    <Link href="/contact ">go to Contact</Link>
    <br/>
    <Link href="/about">go to about</Link>
    <br />
    <Link href="/footer">go to footer</Link>
    <br />
    <Link href="/navbar">
    go to navbar</Link>
    <br />
    
    <button onClick={()=>router.push('/about')}>go to About</button><br />
    <button onClick={()=>router.push('/footer')}>go to Footer</button><br />
    <button onClick={()=>router.push('/contact')}>go to Contact</button><br />
    <button onClick={()=>router.push('/navbar')}>go to Navbar</button><br />
  </div>
  )
};
export default Homepage