import React, { useState, useRef } from 'react'
import { contact } from '../constants'
import {FaUserAlt, FaPhone, FaRegSmileWink} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {RiSendPlaneFill, RiHome2Fill, RiMessage3Fill} from 'react-icons/ri'
import emailjs from '@emailjs/browser'

const Contact = () => {
  let color= "#7F8487"
  let background="FFF"

  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [emailSending, setEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailStatus, setEmailStatus] = useState(false);

  /* Send Email Service using EmailJS */
  const emailServiceId=import.meta.env.VITE_EMAILJS_SERVICE_ID
  const emailPublicKey=import.meta.env.VITE_EMAILJS_PUBLIIC_KEY
  const emailTemplateId=import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setEmailSent(false);
    setEmailStatus(false);
    setfullName('');
    setEmail('');
    setMessage('');
    setEmailSending(true);

    emailjs.sendForm(emailServiceId,emailTemplateId,form.current,emailPublicKey)
      .then((response) => {
        if(response.text === 'OK') {
          setEmailSending(false);
          setEmailSent(true);
          setEmailStatus(true);
        }
      }, (error) => {
        setEmailSent(true)
        setEmailStatus(false);
      })
  }

  return (
    <div className='contact flex flex-col w-full justify-center items-center sm:px-[50px] px-[14px] py-8'>      
      <div className='border-dotted border-t-[12px] border-zinc-300 w-[65px] mb-[60px]'/>
      <h1 className='contact-header sm:text-4xl text-3xl font-bold w-full text-center mb-11'>{contact.header}</h1>
      <div className='contact-content w-full flex sm:flex-row flex-col sm:items-start justify-center items-center'>
        <div className='contact-details flex flex-col items-start justify-center sm:w-2/5 ss:w-2/3 w-full box-border p-4 gap-4 font-semibold bg-[#FCFFE7] text-[#737779] rounded-[10px]'>
          <div className={`contact-name flex justify-start items-center px-6 py-4 w-full rounded-[10px]`}>
            <FaUserAlt className={`mr-4 text-[12px]`}/>
            <p className={`text-[15px]`}>{contact.fullName}</p>
          </div>
          <div className={`contact-phone flex justify-start items-center px-6 py-4`}>
            <FaPhone className={`mr-4 text-[13px]`}/>
            <p className={`text-[15px]`}>{contact.phone}</p>
          </div>
          <div className={`contact-phone flex justify-start items-center px-6 py-4`}>
            <MdEmail className={`mr-4 text-[13px]`}/>
            <p className={`text-[15px]`}>{contact.email}</p>
          </div>
          <div className={`contact-phone flex justify-start items-start px-6 py-4`}>
            <RiHome2Fill className={`mt-1 mr-4 text-[18px]`}/>
            <p className={`text-[15px]`}>{contact.location}</p>
          </div>
        </div>
        <div className='contact-form sm:w-3/5 ss:w-2/3 w-full md:pl-[180px] sm:pl-[140px] h-[100%] flex flex-col items-center justify-start sm:mt-0 mt-10'>
          <h3 className='sm:text-xl text-[20px] sm:text-left sm:font-semibold font-bold text-[#2C74B3] text-center w-full mb-2'>Send me a message</h3>
          <form className='w-full flex flex-col gap-4 justify-start sm:items-end items-center h-[100%]' onSubmit={sendEmail} ref={form}>
            <div className='name-input flex justify-start items-center relative w-full border-solid border-[1.5px] rounded-[8px] border-[#7F8487] px-4 py-3'>
              <FaUserAlt className='text-sm text-[#7F8487]'/>
              <input 
                className='w-full focus:outline-none placeholder:text-sm ml-5 text-sm text-gray-500'
                type="text"
                value={fullName}
                name="user_name"
                onChange={(e) => {setfullName(e.target.value)}}
                placeholder="Your Name Here..." required
              />
            </div>
            <div className='name-input flex justify-start items-center relative w-full border-solid border-[1.5px] rounded-[8px] border-[#7F8487] px-4 py-3'>
              <MdEmail className='text-sm text-[#7F8487]'/>
              <input 
                className='w-full focus:outline-none placeholder:text-sm ml-5 text-sm text-gray-500'
                type="email"
                value={email}
                name="user_email"
                onChange={(e) => {setEmail(e.target.value)}}
                placeholder="And Email Adress..."
                required
              />
            </div>
            <div className='name-input flex justify-start items-start relative w-full border-solid border-[1.5px] rounded-[8px] border-[#7F8487] px-4 py-3'>
              <RiMessage3Fill className='text-sm text-[#7F8487] mt-[2px]'/>
              <textarea 
                className='w-full focus:outline-none placeholder:text-sm ml-5 text-sm text-gray-500 h-[130px]'
                type="textarea"
                value={message}
                name="message"
                onChange={(e) => {setMessage(e.target.value)}}
                placeholder="And Some Message Please... &#9995;"
                required
              />
            </div>
            <button type="submit" className='md:w-[40%] sm:w-[50%] ss:w-[65%] xs:w-[80%] w-full rounded-[8px] text-sm flex justify-center items-center bg-[#2C74B3] text-white px-4 py-2 hover:bg-[#1b4c77]'>
              Send <RiSendPlaneFill className='ml-3 text-[13px]'/>
            </button>
            {emailSending && !emailSent && (<p className={`text-[#9F73AB] font-bold flex justify-center items-center gap-2 text-sm`}><RiSendPlaneFill className='text-[16px]' /> Sending your email...</p>)}
            
            {emailSent && emailStatus && !emailSending && (<p className={`text-[#32bb62] font-bold flex justify-center items-center gap-2 text-sm`}><FaRegSmileWink className='text-[16px]' /> Email has been sent successfully.</p>)}

            {emailSent && !emailStatus && !emailSending && (<p className={`text-[#EB455F] font-bold flex justify-center items-center gap-2 text-sm sm:text-right text-center`}>&#128531; Oops! Something's wrong with the server. <br/> Please call me or send an email manually... Thank you!</p>)}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact