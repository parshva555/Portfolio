"use client";

import React, { useRef,useEffect } from 'react'
import SectionHeading from './section-heading'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { projectsData } from '@/lib/data'
import Project from './project'
export default function Projects() {
  const{ref,inView}= useInView({
    threshold:0.5
  });
  const {setActiveSection,timeOfLastClick} = useActiveSectionContext();
  useEffect(() => {
    if(inView && Date.now() - timeOfLastClick > 1000){
      setActiveSection('Projects');
    }
  },[inView,setActiveSection])
  return (
    <section ref={ref} id='projects' className='scroll-mt-28'>
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
    </section>
  )
}

