'use client'

import { phone } from '@/constant/generalInfos'
import { useState } from 'react'
import { z } from 'zod'
import emailjs from 'emailjs-com'





const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone must be at least 10 characters'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

import { CheckCircle2Icon, InfoIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <div className="grid w-full max-w-md items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>message send successful</AlertTitle>
        <AlertDescription>
          Your message has been sent successfully. I will get back to you as soon as possible.
        </AlertDescription>
      </Alert>
    </div>
  )
}


function Contact() {

    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })
    const [errors, setErrors] = useState<Partial<ContactFormData>>({})
    const [isSend, setIsSend] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        try {

            emailjs.send(
                "service_5dvupjn",
                "template_rppf0kw",
                formData,
                "0VDxYnDZMBN5m5FC7"
            ).then(_ => {
                setIsSend(true)
            })
        } catch (e) {
            alert("Error sending message")
        }

    }

    return (
        <div id='contact' className='w-full flex-col relative z-10 gap-8 xl:flex-row md:w-3/4 flex min-h-screen px-4 py-20 md:px-10 items-center bg-gray-800 md:bg-transparent'>
            <div className='w-full xl:w-1/3'>
                <h1 className='text-4xl font-bold text-white mb-6'>Get In Touch</h1>
                <p className='text-white'>Feel free to reach out to me for any inquiries or collaborations.</p>
            </div>
            <div className='w-full xl:w-2/3 '>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                            <label htmlFor="name" className='block text-white font-semibold'>Name</label>
                            <input id="name" type="text" placeholder='Your Name' value={formData.name} onChange={handleChange} className='w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
                            {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="email" className='block text-white font-semibold'>Email</label>
                            <input id="email" type="email" placeholder='Your Email' value={formData.email} onChange={handleChange} className='w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
                            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="phone" className='block text-white font-semibold'>Phone Number</label>
                            <input id="phone" type="tel" placeholder='Your Phone Number' value={formData.phone} onChange={handleChange} className='w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
                            {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="subject" className='block text-white font-semibold'>Subject</label>
                            <input id="subject" type="text" placeholder='Subject' value={formData.subject} onChange={handleChange} className='w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
                            {errors.subject && <p className='text-red-500 text-sm'>{errors.subject}</p>}
                        </div>
                    </div>
                    <div className='mt-6'>
                        <label htmlFor="message" className='block text-white font-semibold mb-2'>Message</label>
                        <textarea id="message" placeholder='Your Message' value={formData.message} onChange={handleChange} className='w-full h-48 p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'></textarea>
                        {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                    </div>
                    <button type='submit' className='mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition cursor-pointer'>
                        Send Message
                    </button>
                </form>
                {isSend && <AlertDemo />}

            </div>
        </div>
    )

}

export default Contact