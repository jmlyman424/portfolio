'use client';
/* eslint-disable react/no-unknown-property */

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);
  const labelStyle = 'block mb-2';

  const inputStyle = `min-h-10 w-full mb-6 px-3 py-2 bg-white dark:text-black placeholder-gray-500 border border-gray-300 rounded-md
    focus:outline-none focus:ring focus:ring-accent-1 focus:border-accent-1 overflow-hidden`;

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      setStatus('Sending...');
      setError(null);
      const formData = new FormData(e.target);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      if (res.status === 200) {
        setStatus('Thank you for your message!');
      } else {
        setStatus(
          `Error sending your message. Please try again later. ${res.statusText}.`
        );
        setError(res.status);
      }
    } catch (e) {
      setStatus(`Error sending your message. Please try again later. ${e}.`);
      setError(e);
    }
  };

  return (
    <div className="max-w-[80rem] w-[58rem] p-8 rounded-xl bg-gray-50 dark:bg-transparent border border-gray-200 dark:border-accent-1">
      <form
        name="Contact"
        action="/success"
        method="post"
        className=""
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={handleSubmitForm}
      >
        {/* Netlify Forms hidden input */}
        <input type="hidden" name="form-name" value="Contact" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out if you&apos;re human:
            <input name="bot-field" type="text" />
          </label>
        </p>

        {/* NAME */}
        <label htmlFor="name" className={labelStyle}>
          Name <span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          name="Name"
          placeholder="Your Name"
          id="name"
          className={inputStyle}
          required
        />

        {/* EMAIL */}
        <label htmlFor="email" className={labelStyle}>
          Email <span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          name="Email"
          placeholder="Email Address"
          id="email"
          className={inputStyle}
          required
        />

        {/* MESSAGE */}
        <label htmlFor="message" className={labelStyle}>
          Message <span className="text-red-700">*</span>
        </label>
        <textarea
          type="textarea"
          name="Message"
          placeholder="Your Message"
          id="message"
          className={inputStyle}
          rows="5"
        />

        {/* SUBMIT */}
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <button
            type="submit"
            className="px-8 py-2 text-white transition-colors rounded-md cursor-pointer bg-accent-1 hover:bg-accent-2"
          >
            Send!
          </button>
          {status && (
            <p
              className={`px-3 py-1 rounded-lg border text-green-800 bg-green-100 border-green-800 ${error && 'text-red-800 bg-red-100 border-red-800'}`}
            >
              {status}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
