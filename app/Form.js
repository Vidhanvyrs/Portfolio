import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const form = useRef();
  //   const [showAlert, setShowAlert] = useState(false);
  const [clicker, setclicker] = useState(false);
  const clickhandler = () => {
    setclicker(true);
  };
  useEffect(() => {
    if (clicker) {
      toast("Message is sent to Vidhan 😉\n⚡keep Grinding", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setclicker(false);
      //   form.current.reset();
    }
  }, [clicker]);

  const sendEmail = (e) => {
    e.preventDefault();
    const name = e.target.elements.user_name.value;
    const email = e.target.elements.user_email.value;
    const message = e.target.elements.message.value;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_kdmsn5q",
        "template_467g7bi",
        templateParams,
        "YNF9oviOIkAKFnOzr"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <footer className="text-center py-8 bg-stone-100 shadow-lg rounded-xl dark:bg-gray-900 dark:text-gray-200">
      <div>
        <h3 className="text-3xl py-10 dark:text-cyan-800 font-burtons">
          Connect with me and Share your thoughts 💭
        </h3>
        <form ref={form} onSubmit={sendEmail} className="mx-auto max-w-md">
          <input
            type="text"
            name="user_name"
            placeholder="📛  Your Name"
            className="my-2 bg-gray-200 border border-gray-300 rounded-lg text-gray-700 font-serif outline-none p-3 w-56 md:w-full"
          />
          <input
            type="email"
            name="user_email"
            placeholder="📧  Your E-mail"
            className="my-2 bg-gray-200 border border-gray-300 rounded-lg text-gray-700 font-serif outline-none p-3 w-56 md:w-full"
          />
          <textarea
            name="message"
            placeholder="✍️  Write Me Here "
            className="my-2 bg-gray-200 border border-gray-300 rounded-lg text-gray-700 font-serif outline-none p-3 w-56 md:w-full h-48"
          ></textarea>
          <button
            type="submit"
            value="Send"
            onClick={clickhandler}
            className="my-2 text-lg rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-burtons outline-none p-3 w-48 md:w-52 cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </footer>
  );
};
export default Form;
