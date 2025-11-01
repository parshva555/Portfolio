import React from 'react'

export const Footer = () => {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 block text-xs'>
            &copy; 2025 Parshva Dani. All Rights Reserved.
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>About this website:</span> built with React & Next.js (App Router and Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & resend.
        </p>
    </footer>
  )
}
