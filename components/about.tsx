"use client";

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './section-header';

export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] flex flex-col align-middle justify-center text-center leading-6 sm:mb-40'
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}    
    transition={{delay: 0.175}}
    >
        <SectionHeader>About Me</SectionHeader>
        
        <p className='mb-2'>I am currently a third year student in the University of British Columbia's BCS program. I enjoy all aspects of software development, but I am particularly interested in AI, game development, and sports data and analytics. I am currently seeking internships which would allow me to expand on my current skillset and expose me to new technologies and ideas. I have previously worked as a biomathematics researcher with the Tyson Lab, where we utilized MATLAB to model discrete-time population dynamics in order to discover novel climate induced extinction events.</p>
        <p>On a personal level, I enjoy anything that gets me outside. I love to hike, golf, and ski. I also enjoy pushing myself outside of my comfort zone, and this summer I will be attempting to mountain bike from Banff to Mexico on the Great Divide Mountain Bike Route. I frequently travel and seek new experiences and have backpacked through almost 50 countries, with many more still to see. </p>
        



    </motion.section>
    )
}
