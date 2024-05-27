import React from 'react'
import { motion } from 'framer-motion'

export default function Skills() {
    const skills = ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Python', 'Java', 'C++', 'Git']
  return (
    <div
    className='mb-28 max-w-[50rem] text-center sm:mb-0 sm:text-2xl'
    >
      <h1 className='font-bold pt-10 pb-4'>Skills</h1>
      <ul className='flex flex-row font-medium max-w-[30rem] flex-wrap justify-center gap-2'>
        {skills.map((skill) => (
          <li key={skill} className='bg-white rounded-full border border-slate-900/10 px-5 py-3 hover:scale-105 transition'>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

