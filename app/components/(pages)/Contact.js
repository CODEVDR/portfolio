"use client";
import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);

    // For actual implementation, replace the above with API call to your backend
  };

  return (
    <div className="container mx-auto my-20 px-4 pt-16" id="contact">
      <div className="flex flex-col gap-10 items-center p-8 rounded-xl shadow-xl">
        <h2 className="text-6xl font-bold text-center bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
          &lt;Contact/&gt;
        </h2>

        <p className="text-white text-center max-w-3xl">
          Have a project in mind or want to discuss potential opportunities? I'd
          love to hear from you! Fill out the form below and I'll get back to
          you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Contact Form */}
          <div className="md:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg border border-yellow-500/30 hover:border-yellow-500 transition-all duration-300">
            <div className="flex items-center mb-6">
              <i className="fa-solid fa-message text-yellow-500 text-4xl mr-3"></i>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
                Send Me a Message
              </h3>
            </div>

            {submitStatus && (
              <div
                className={`p-4 rounded-md mb-6 ${
                  submitStatus.success
                    ? "bg-green-500/20 text-green-300"
                    : "bg-red-500/20 text-red-300"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:border-yellow-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:border-yellow-500"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="subject" className="block text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:border-yellow-500"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:border-yellow-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 py-3 px-8 rounded-lg text-black font-bold hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 w-full md:w-auto ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-yellow-500/30 hover:border-yellow-500 transition-all duration-300">
            <div className="flex items-center mb-6">
              <span className="material-symbols-outlined text-yellow-500 text-4xl mr-3">
                contact_page
              </span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
                Contact Info
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <span className="material-symbols-outlined text-yellow-500 text-2xl mr-3">
                  email
                </span>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a
                    href="mailto:code.durgesh86@gmail.com"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    code.durgesh86@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <span className="material-symbols-outlined text-yellow-500 text-2xl mr-3">
                  location_on
                </span>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300">Rourkela , Odisha , India</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="material-symbols-outlined text-yellow-500 text-2xl mr-3">
                  schedule
                </span>
                <div>
                  <h4 className="text-white font-semibold">Working Hours</h4>
                  <p className="text-gray-300">
                    Monday - Friday: 9AM - 5PM
                    <br />
                    Weekend: By appointment
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-700">
                <h4 className="text-white font-semibold mb-4">
                  Connect With Me
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/CODEVDR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-yellow-500/20 transition-all"
                  >
                    <i className="fab fa-github text-yellow-500"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/codevdr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-yellow-500/20 transition-all"
                  >
                    <i className="fab fa-linkedin text-yellow-500"></i>
                  </a>
                  <a
                    href="https://instagram.com/vdr.exe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-yellow-500/20 transition-all"
                  >
                    <i className="fab fa-instagram text-yellow-500"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full mt-10">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-yellow-500/30 hover:border-yellow-500 transition-all duration-300">
            <div className="flex items-center mb-6 justify-center">
              <span className="material-symbols-outlined text-yellow-500 text-4xl mr-3">
                help
              </span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text text-center">
                Frequently Asked Questions
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h4 className="text-yellow-400 font-semibold mb-2">
                  What is your typical project timeline?
                </h4>
                <p className="text-white">
                  Project timelines vary based on scope and complexity. A simple
                  website might take 2-3 weeks, while larger applications can
                  take 2-3 months.
                </p>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h4 className="text-yellow-400 font-semibold mb-2">
                  What are your payment terms?
                </h4>
                <p className="text-white">
                  I typically require a 50% deposit to begin work, with the
                  remaining balance due upon project completion. For larger
                  projects, we can establish milestone payments.
                </p>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h4 className="text-yellow-400 font-semibold mb-2">
                  Do you provide ongoing support?
                </h4>
                <p className="text-white">
                  Yes, I offer maintenance packages to ensure your project runs
                  smoothly after launch. These can be tailored to your specific
                  needs.
                </p>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h4 className="text-yellow-400 font-semibold mb-2">
                  Do you work with clients internationally?
                </h4>
                <p className="text-white">
                  Absolutely! I've worked with clients from around the world.
                  Time zone differences are managed with clear communication and
                  scheduled meetings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
