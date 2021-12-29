import React from 'react';

export default function Contact() {
  const labelStyle = 'block mb-2 text-sm text-white dark:text-gray-400';

  const inputStyle = `w-full mb-6 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md
    focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300`;

  return (
    <form
      name="Contact"
      action="/success"
      method="post"
      className="max-w-[80rem] w-[58rem] p-8 text-black bg-gray-900 rounded-xl"
      data-netlify="true"
    >
      {/* Netlify Forms hidden input */}
      <input type="hidden" name="form-name" value="Contact" />

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
      <button
        type="submit"
        className="px-4 py-4 w-40 text-white bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 rounded-md cursor-pointer transition-colors"
      >
        Send!
      </button>
    </form>
  );
}
