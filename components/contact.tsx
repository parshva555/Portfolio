"use client";
import React from "react";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";
import {motion} from "framer-motion"
import { useSectionInView } from "@/lib/hooks";
import {sendEmail} from '@/actions/sendEmail'
import toast from "react-hot-toast";
export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section ref={ref} id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" initial={{
      opacity:0,
    }}
    whileInView={{
      opacity:1
    }}
    transition={{
      duration:1,
    }}
    viewport={{
      once:true
    }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a href="mailto:parshvadani2003@gmail.com" className="underline font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          parshvadani@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col dark:text-black" action={async(FormData) => {
        const {data,error} = await sendEmail(FormData);
        if(error){
          toast.error(error)
          return;
        }
        toast.success('Email Sent successfully')
      }}>
        <input name="senderEmail" className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20" type="email" required maxLength={500} placeholder="Your Email"/>
        <textarea name="message" className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/20" required maxLength={5000}  placeholder="Your Message" />
        <SubmitBtn/>
      </form>
    </motion.section>
  );
}
