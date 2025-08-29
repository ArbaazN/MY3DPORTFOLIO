import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ftagyvm", // 👉 replace with your EmailJS Service ID
        "template_94fr449", // 👉 replace with your EmailJS Template ID
        formRef.current,
        "X56BhKHPXSQjkHIl5" // 👉 replace with your EmailJS Public Key
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "🚀 Your message has been delivered successfully.",
            confirmButtonText: "Awesome!",
            buttonsStyling: false,
            customClass: {
              popup: "rounded-2xl shadow-lg bg-[#1a1a1a]",
              title: "text-xl font-bold text-white",
              htmlContainer: "text-gray-300",
              confirmButton:
                "bg-[#915EFF] hover:bg-[#7a4be5] text-white px-6 py-2 rounded-lg font-semibold transition duration-200",
            },
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "❌ Failed to send message. Try again later.",
            confirmButtonText: "Retry",
            buttonsStyling: false,
            customClass: {
              popup: "rounded-2xl shadow-lg bg-[#1a1a1a]",
              title: "text-xl font-bold text-white",
              htmlContainer: "text-gray-300",
              confirmButton:
                "bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition duration-200",
            },
          });
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              <FontAwesomeIcon
                icon={faUser}
                size="1x"
                style={{ color: "#915EFF" }}
              />{" "}
              Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="1x"
                style={{ color: "#915EFF" }}
              />{" "}
              Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
