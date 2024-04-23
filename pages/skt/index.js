import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div className='mx-auto w-[50%] text-center p-28'>
      <h1 className='font-bold m-10'>SAI KRISHNA</h1>
      <Link href="skt/one" className='m-auto  border-8 black p-4'>first </Link>
      <Link href="skt/two" className='m-auto  border-8 black p-4'>second </Link>
      <Link href="skt/three" className='m-auto  border-8 black p-4'>third </Link>
      <Link href="skt/four" className='m-auto  border-8 black p-4'>four </Link>
    </div>
  )
}
