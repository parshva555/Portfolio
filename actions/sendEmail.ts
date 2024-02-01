"use server";
import React from "react";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import { ContactFormEmail } from "@/email/contact-form-email";
const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData:FormData)=> {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');
  // simple server side validation
  if(!validateString(senderEmail,500)){
    return {
      error:"Invalid Sender email"
    }
  }
  if(!validateString(message,5000)){
    return {
      error:"Invalid Message"
    }
  }
  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'parshvadani@gmail.com',
      subject: 'Message from contact from',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail,{
        message: message as string,
        senderEmail: senderEmail as string
      })
      // react:<ContactFormEmail message={message} senderEmail={senderEmail}/>
    })
  } catch (error:unknown) {
    return {
      error:getErrorMessage(error)
    }
  };
  return{
    data,
  };
}