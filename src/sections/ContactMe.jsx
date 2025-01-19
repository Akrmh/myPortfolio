import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hchsxxf",
        "template_uqww0hj",
        form.current,
        "9R5bR8G_r_Poodwgg"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send the message. Please try again later.");
        }
      );

    e.target.reset();
  };

  return (
    <div id="contactMe" className="flex justify-center items-center h-screen bg-[#1f242d] text-white pt-8">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="from_name"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            name="message"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>
        {status && <p className="mt-4 text-green-600">{status}</p>}
      </form>
    </div>
  );
};

export default ContactMe;
