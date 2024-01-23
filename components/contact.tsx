"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import {motion} from "framer-motion"
import { useSectionInView } from "@/lib/hooks";
import {sendEmail} from '@/actions/sendEmail'
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
      <form className="mt-10 flex flex-col" action={async(formData) => {
        console.log("Running on Client")
        console.log(formData.get("senderEmail"))
        console.log(formData.get("message"))
        await sendEmail(formData)
      }}>
        <input name="senderEmail" className="h-14 rounded-lg px-4 borderBlack" type="email" required maxLength={500} placeholder="Your Email"/>
        <textarea name="message" className="h-52 my-3 rounded-lg borderBlack p-4" required maxLength={500}  placeholder="Your Message" />
        <button
          type="submit"
          className=" group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-none focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}
