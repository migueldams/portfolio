'use client'

import { useState } from 'react'
import { z } from 'zod'






const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone must be at least 10 characters'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

function Contact() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })
    const [errors, setErrors] = useState<Partial<ContactFormData>>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        try {
            contactSchema.parse(formData)
            setErrors({})
            console.log('Form submitted:', formData)
            // Add your submission logic here
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = error.flatten().fieldErrors
                setErrors(fieldErrors as Partial<ContactFormData>)
            }
        }
    }

    return (
        <div className='w-full flex-col gap-8 md:flex-row md:w-3/4 flex h-screen p-20  items-center'>
            <div className='w-full md:w-1/3'>
                <h1 className='text-4xl font-bold text-white mb-6'>Get In Touch</h1>
                <p className='text-white'>Feel free to reach out to me for any inquiries or collaborations.</p>
            </div>
            <div className='w-full md:w-2/3'>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-2 gap-8'>
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
                    <button type='submit' className='mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition'>
                        Send Message
                    </button>
                </form>

            </div>
        </div>
    )

}

export default Contact