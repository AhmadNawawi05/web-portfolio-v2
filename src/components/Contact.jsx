import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Player } from "@lottiefiles/react-lottie-player";
import Swal from "sweetalert2";

import animationData from "../assets/Animation - 1723135420528.json";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Kirim email dari pengguna
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, // ID layanan Anda
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // ID template untuk pesan dari pengguna
        {
          from_name: form.name,
          to_name: "Ahmad Nawawi",
          from_email: form.email,
          to_email: "ahmadnawawiumar@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY // Kunci publik Anda
      )
      .then(
        () => {
          // Kirim auto-reply ke pengguna
          emailjs
            .send(
              import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, // ID layanan Anda
              import.meta.env.VITE_APP_EMAILJS_AUTO_REPLY_TEMPLATE_ID, // ID template untuk auto-reply
              {
                from_name: "Ahmad Nawawi",
                to_name: form.name,
                to_email: form.email,
                message: "Thank you for reaching out! We have received your message and will get back to you shortly.",
              },
              import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY // Kunci publik Anda
            )
            .then(
              () => {
                setLoading(false);
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Thank you. I will get back to you as soon as possible.",
                  showConfirmButton: false,
                  timer: 2500
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
                  position: "center",
                  icon: "error",
                  title: "Ahh, something went wrong. Please try again.",
                  showConfirmButton: false,
                  timer: 2500
                }); 
              }
            );
        },
        (error) => {
          setLoading(false);
          console.error(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Ahh, something went wrong. Please try again.",
            showConfirmButton: false,
            timer: 2500
          }); 
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      {/* Form Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl shadow-lg'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              rows={6}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-lg outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Animation Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='flex justify-center items-center flex-1'
      >
        <Player
          autoplay
          loop
          src={animationData}
          style={{ height: "100%", width: "100%", maxHeight: "450px", maxWidth: "450px" }}
        />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
