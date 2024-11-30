import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

function Contact() {
  const navigate = useNavigate();
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = async (data) => {
    try {
      await emailjs.sendForm(
        "service_brespfl",
        "template_7lnj869",
        formRef.current,
        "sD2YaMIXYLNDKnSCQ"
      );
      toast.success("Message sent successfully!");
      formRef.current.reset(); // Reset the form
      navigate("/"); // Redirect if needed
    } catch (error) {
      console.error("Email sending failed:", error.text);
      toast.error("Failed to send the message. Please try again.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form
            ref={formRef}
            onSubmit={handleSubmit(sendEmail)}
            name="contact-form"
          >
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h1 className="font-bold text-3xl">Contact Us</h1>

            {/* Name Input */}
            <div className="mt-8 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your FullName"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                name="user_name"
                {...register("user_name", { required: true })}
              />
              <br />
              {errors.user_name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Email Input */}
            <div className="mt-8 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                name="user_email"
                {...register("user_email", { required: true })}
              />
              <br />
              {errors.user_email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Message Input */}
            <div className="mt-8 space-y-2">
              <span>Message</span>
              <br />
              <textarea
                placeholder="Type Your Message"
                className="w-80 h-32 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                name="message"
                {...register("message", { required: true })}
              />
              <br />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-around mt-8">
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
