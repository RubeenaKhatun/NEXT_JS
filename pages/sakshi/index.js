import React from 'react'
import Link from 'next/link'
export default function one() {
  return (
    <div className='mx-auto w-[50%] text-center p-28 text-red-500'>
        <h1>Sakshi's Resume</h1>
        <Link href="/sakshi/one" className='m-10 p-4 text-red-500'>First</Link>
        <Link href="/sakshi/two" className='m-10 p-4'>Second</Link>
        <Link href="/sakshi/three" className='m-10 p-4'>Third</Link>
        <Link href="/sakshi/four" className='m-10 p-4'>Four</Link>
    </div>
  )
}
