import React from 'react'
import Image from "next/image";
import { getTechLogos, cn } from '@/lib/utils';

const DisplayTechIcons = async({ techStack }: TechIconProps) => {
    const techIcons = await getTechLogos(techStack);


  return (
      <div className='flex flex-row gap-2'>{techIcons.slice(0, 3).map(({ tech, url }, index) => (
          <div key={tech} className="relative group bg-dark-300 rounded-full p-2 flex-center">
              <span className='tech-tooltip'>{tech}</span>
              <Image src={url} alt={tech} width={20} height={20} className='size-5'/>
          </div>
      ))}</div>
  )
}

export default DisplayTechIcons