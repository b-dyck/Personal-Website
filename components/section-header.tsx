import React from 'react'

type SectionHeaderProps = {
    children: React.ReactNode
};

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2 className='font-bold pt-4 pb-4 text-center text-2xl sm:text-3xl'>{children}</h2>
  )
}
