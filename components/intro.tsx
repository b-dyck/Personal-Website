import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <section>
        <div className='flex flex-col items-center justify-center'>
            <div>
                <Image src='/bryce.jpg' alt='Bryce Dyck' width={200} height={200} className='rounded-full' />
            </div>
            <h1 className='text-6xl font-bold'>Bryce Dyck</h1>
            <h2 className='text-2xl font-medium'>Computer Science Student</h2>
        </div>
    </section>
  )
}
