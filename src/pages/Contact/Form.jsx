import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    }
    if (!job.trim()) {
      errors.job = "Job title is required";
    }
    if (!company.trim()) {
      errors.company = "Company name is required";
    }
    if (!city.trim()) {
      errors.city = "City name is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      name: name,
      email: email,
      job: job,
      company: company,
      city: city,
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      console.log("Email sent successfully!", response);
      alert("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Email not sent successfully");
    } finally {
      setName("");
      setEmail("");
      setJob("");
      setCompany("");
      setCity("");
      setIsSubmitting(false);
      setCaptchaKey(Date.now());
    }
  };

  return (
    <div className="flex w-full items-center justify-center bg-cover "
    style={{
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/GIF%2FContact%2Fcontact.jpg?alt=media&token=618919c0-8990-4294-83e2-f2c65e389251)`,
      }}>
        <div className="w-full h-full backdrop-blur-sm backdrop-brightness-50 flex justify-center items-center">
      <div className=" py-8 md:px-6   ">
        <div className="mt-8 space-y-4   w-full shadow rounded  p-8 sm:p-12 ">
          <div className="bg-transparent">
            <label
              htmlFor="name"
              className=" text-white font-medium bg-transparent "
            >
              Name
            </label>
            <input
              value={name}
              id="name"
              type="name"
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
              className="w-full  leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-neutral-50 rounded"
            />
            {errors.name && (
              <div className="text-black px-2">{errors.name}</div>
            )}
          </div>
          <div className="bg-transparent">
            <label
              htmlFor="email"
              className=" text-white font-medium bg-transparent "
            >
              Email address
            </label>
            <input
              value={email}
              id="email"
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full  leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-neutral-50 rounded"
            />
            {errors.email && (
              <div className="text-black px-2">{errors.email}</div>
            )}
          </div>
          <div className="bg-transparent">
            <label
              htmlFor="designation"
              className=" text-white bg-transparent font-medium"
            >
              Designation
            </label>
            <input
              value={designation}
              id="designation"
              type="text"
              placeholder="Enter the Designation here..."
              onChange={(e) => setDesignation(e.target.value)}
              className="w-full  leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-neutral-50 rounded"
            />
            {errors.job && <div className="text-black px-2">{errors.job}</div>}
          </div>
          <div className="bg-transparent">
            <label
              htmlFor="Organization"
              className=" text-white bg-transparent font-medium"
            >
              Organization
            </label>
            <input
              value={organization}
              id="Organization"
              type="text"
              placeholder="Enter your Organization name .."
              onChange={(e) => setOrganization(e.target.value)}
              className="w-full  leading-none text-black  p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-neutral-50 rounded"
            />
            {errors.company && (
              <div className="text-black px-2">{errors.company}</div>
            )}
          </div>

          <div className="bg-transparent">
            <label
              htmlFor="message"
              className=" text-white bg-transparent font-medium"
            >
              Message
            </label>
            <textarea
              value={message}
              id="message"
              type="text"
              placeholder="Enter your message name .."
              onChange={(e) => setMessage(e.target.value)}
              className="w-full  leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-neutral-50 rounded"
            />
            {errors.city && (
              <div className="text-black px-2">{errors.city}</div>
            )}
          </div>

          
    
          <div className="space-y-4 ">
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500 "
              onClick={(e) => sendEmail(e)}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
