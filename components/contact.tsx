import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)] '>
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-gray-700'>
          Please Contact me Directly at{" "} <a href="mailto:parshvadani2003@gmail.com" className='underline'>parshvadani2003@gmail.com</a>{" "} or through this form</p>
        <form className='mt-10 flex flex-col' action="">
          <input className='h-14 rounded-lg borderBlack' type="email" />
          <textarea className='h-52 my-3 rounded-lg borderBlack p-4'/>
          <button type='submit' className='flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-none'>Submit <FaPaperPlane/>{" "}</button>
          </form>    
    </section>
  )
}
