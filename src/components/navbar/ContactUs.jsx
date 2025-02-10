import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6rchv3c', 'template_aj6f1x5', form.current, {
        publicKey: 'tRp_Z6LJHXc3t7VxT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form 
      ref={form} 
      onSubmit={sendEmail} 
      className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
      <input 
        type="text" 
        name="user_name" 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      />

      <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input 
        type="email" 
        name="user_email" 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      />

      <label className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
      <textarea 
        name="subject" 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
      <textarea 
        name="message" 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <input 
        type="submit" 
        value="Send" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
      />
    </form>
  );
};
