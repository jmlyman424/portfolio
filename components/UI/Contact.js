import React from 'react';

export default function Contact() {
  const labelStyle = 'block mb-2 text-sm text-white dark:text-gray-400';

  const inputStyle = `w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md
    focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300`;

  return (
    <form
      action=""
      name="contact"
      method="post"
      className="max-w-[80rem] w-[58rem] p-8 text-black bg-gray-900 rounded-xl"
      data-netlify="true"
    >
      {/* Netlify Forms hidden input */}
      <input type="hidden" name="form-name" value="contact" />

      {/* NAME */}
      <div className="mb-6">
        <label htmlFor="name" className={labelStyle}>
          Name <span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          form="contact"
          placeholder="Your Name"
          id="name"
          className={inputStyle}
          required
        />
      </div>

      {/* EMAIL */}
      <div className="mb-6">
        <label htmlFor="email" className={labelStyle}>
          Email <span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          form="contact"
          placeholder="Email Address"
          id="email"
          className={inputStyle}
          required
        />
      </div>

      {/* MESSAGE */}
      <div className="mb-6">
        <label htmlFor="message" className={labelStyle}>
          Message <span className="text-red-700">*</span>
        </label>
        <textarea
          type="textarea"
          form="contact"
          placeholder="Your Message"
          id="message"
          className={inputStyle}
          rows="5"
        />
      </div>

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
