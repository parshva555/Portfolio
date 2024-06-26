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
        Please Contact me Directly at{" "}
        <a href="mailto:parshvadani2003@gmail.com" className="underline">
          parshvadani@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form className="mt-10 flex flex-col dark:text-black" action={async(FormData) => {
        const {data,error} = await sendEmail(FormData);
        if(error){
          toast.error(error)
          return;
        }
        toast.success('Email Sent successfully')
      }}>
        <input name="senderEmail" className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" type="email" required maxLength={500} placeholder="Your Email"/>
        <textarea name="message" className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" required maxLength={5000}  placeholder="Your Message" />
        <SubmitBtn/>
      </form>
    </motion.section>
  );
}
