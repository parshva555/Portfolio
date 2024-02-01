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
      <p className="text-gray-700 -mt-6">
        Please Contact me Directly at{" "}
        <a href="mailto:parshvadani2003@gmail.com" className="underline">
          parshvadani2003@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form className="mt-10 flex flex-col" action={async(FormData) => {
        const {data,error} = await sendEmail(FormData);
        if(error){
          toast.error(error)
          return;
        }
        toast.success('Email Sent successfully')
      }}>
        <input name="senderEmail" className="h-14 rounded-lg px-4 borderBlack" type="email" required maxLength={500} placeholder="Your Email"/>
        <textarea name="message" className="h-52 my-3 rounded-lg borderBlack p-4" required maxLength={5000}  placeholder="Your Message" />
        <SubmitBtn/>
      </form>
    </motion.section>
  );
}
