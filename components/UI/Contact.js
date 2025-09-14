export default function Contact() {
  const labelStyle = 'block mb-2';

  const inputStyle = `min-h-10 w-full mb-6 px-3 py-2 bg-white dark:text-black placeholder-gray-500 border border-gray-300 rounded-md
    focus:outline-none focus:ring focus:ring-accent-1 focus:border-accent-1 overflow-hidden`;

  return (
    <form
      name="Contact"
      action="/success"
      method="post"
      className="max-w-[80rem] w-[58rem] p-8 rounded-xl bg-gray-50 dark:bg-transparent border border-gray-200 dark:border-accent-1"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      {/* Netlify Forms hidden input */}
      <input type="hidden" name="form-name" value="Contact" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human:
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
      <button
        type="submit"
        className="px-8 py-2 text-white bg-accent-1 hover:bg-accent-2 rounded-md cursor-pointer transition-colors"
      >
        Send!
      </button>
    </form>
  );
}
