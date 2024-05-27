import React from 'react'
import SectionHeader from './section-header'
import { projects } from '@/lib/data'
import Image from 'next/image';

export default function Projects() {
  return (
    <section>
        <SectionHeader>My Projects</SectionHeader>
        <div>
            {
                projects.map((project, index) => (
                    <React.Fragment key={index}>
                    <Project {...project}/>
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}

type ProjectProps = typeof projects[number];

function Project({
    title,
    description,
    tags,
    imageUrl,
}: ProjectProps) {
    return (
    <section className='group bg-slate-200 max-w-[45rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-slate-300 transition'>
        <div className='pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]'>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='mt-2 leading-relaxed text-slate-700'>{description}</p>
            <ul className='flex flex-wrap gap-2 mt-auto'>
                {tags.map((tag, index) => (
                    <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={index}>{tag}</li>
                ))}
            </ul>
        </div>
        <Image src={imageUrl} alt={title} quality={90} className='absolute top-8 -right-40 w-[28rem] rounded-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105 group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2 transition'/>
    </section>
    )
}
