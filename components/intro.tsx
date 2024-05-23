"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import the Image component from next.js
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex flex-col items-center justify-center'>
            <motion.div 
            className='flex items-center'
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              duration: 0.2,
              type: 'tween',
            }}
            >
                <Image src='/bryce.jpg' alt='Bryce Dyck' width='192' height='192'  className='h-24 w-24 rounded-full object-cover border-[0.4rem] border-white shadow-xl' />
            </motion.div>
        </div>

        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0}}
          transition={{
            delay: 0.1,
          }}
          >
          <span className='font-bold'>Bryce Dyck - Software Developer</span>
        </motion.h1>
        <motion.p className='px-4 text-lg font-medium mb-4'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
          delay: 0.125,
        }}
        >
          I am a Computer Science student at the University of British Columbia, and a former biomathematics researcher. Feel free to reach out about software development, my research, or anything else at the link below. 
        </motion.p>
        <motion.div className='flex flex-col sm:flex-row justify-center gap-4 px-4 text-lg font-medium'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
          delay: 0.125,
        }}
        >
          <Link href='#contact' className='bg-slate-900 text-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 transition'>Contact Me Here →</Link>
          <a className='bg-white rounded-full px-7 py-3 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-slate-900/10' href='/resume.pdf' download>Download Resume </a>
          <a className='bg-white rounded-full p-4 gap-2 flex items-center justify-center outline-none focus:scale-110 hover:scale-110 sm:hover:scale-y-[1.15] sm:hover:scale-x-[1.20] active:scale-105 transition border border-slate-900/10' href='https://github.com/b-dyck' target='_blank'><BsGithub /> </a>
        </motion.div>
    </section>
  )
}
