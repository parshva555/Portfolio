"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks';
export default function Projects() {
  const {ref} = useSectionInView('Projects',0.5); 
  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
        <SectionHeading>My Projects</SectionHeading>
        <div>
            {
                projectsData.map((project,index)=> (
                    <React.Fragment key={index}>
                    <Project {...project}/>
                    </React.Fragment>    
                ))
            }
        </div>
        <div className='mt-10 text-center'>
            <a href="https://github.com/parshva555" target="_blank" className="inline-flex items-center gap-2 text-gray-700 dark:text-white/70 hover:text-gray-950 dark:hover:text-white transition-colors border-b-2 border-transparent hover:border-gray-950 dark:hover:border-white pb-1">
                View my other projects on Github <span className="text-xl">→</span>
            </a>
        </div>

    </section>
  )
}

