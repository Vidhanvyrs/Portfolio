"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import dotlasher from "public/dotlasher3.jpg";
import edu from "public/edu.png";
import code from "public/code2.png";
import consult from "public/consulting.png";
import web1 from "public/ph1.png";
import web2 from "public/ph2.png";
import web3 from "public/ph3.png";
import web4 from "public/ph5.png";
import web5 from "public/ph6.png";
import web6 from "public/ph7.png";
import web7 from "public/ph8.png";
import web8 from "public/ph9.png";
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  FaReact,
  AiFillHtml5,
  IoLogoCss3,
  BiLogoJavascript,
  BiLogoTailwindCss,
  FaJava,
} from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export default function Home() {
  const [darkMode, setdarkMode] = useState(false);
  const [myicon, seticon] = useState(false);
  const modehandler = () => {
    setdarkMode(!darkMode);
    seticon(!myicon);
  };

  const icon = myicon ? (
    <BsFillMoonStarsFill className="cursor-pointer text-2xl transition-transform duration-500" />
  ) : (
    <BsFillSunFill className="cursor-pointer text-2xl transition-transform duration-500 animate-spin" />
  );

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kdmsn5q",
        "template_467g7bi",
        form.current,
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
    <div className={darkMode ? "" : "dark"}>
      <main className="bg-gray-50 px-10 md:px-20 transition-colors duration-500 ease-in-out dark:bg-gray-900 dark:transition-colors dark:duration-500 dark:ease-in-out">
        <section className="min-h-screen">
          <nav className="py-10 mb-10 flex justify-between ">
            <a className="cursor-pointer text-xl font-burtons">
              <h1 className="dark:text-white">DotLasher</h1>
            </a>
            <ul className="flex items-center dark:text-white">
              <li className="rounded-sm " onClick={modehandler}>
                {/* <BsFillMoonStarsFill
                  onClick={() => {
                    setdarkMode(!darkMode);
                  }}
                  className="cursor-pointer text-2xl"
                /> */}
                {icon}
              </li>

              <li>
                <a
                  href="https://drive.google.com/file/d/1LNRGeD4cI2X5Z_fPPZyh25GmM_5YOMdQ/view?usp=drive_link"
                  target="_blank"
                  className="ease-in-out duration-300 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-7"
                >
                  RESUME
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-5">
            <div className="py-1">
              <Image
                src={dotlasher}
                alt="dotlasher"
                className="mx-auto  rounded-full shadow-lg w-60 h-60 object-cover m-5 overflow-hidden md:w-80 md:h-80 dark:shadow-lg"
              />
            </div>
            <h2 className="text-4xl py-2 text-teal-700 font-medium font-burtons leading-tight md:text-6xl">
              Vidhan Solanki
            </h2>

            <h3 className="text-xl py-5  font-burtons md:text-3xl dark: text-cyan-800">
              Programmer & Developer
            </h3>
            {/* 🗒️📂 ⚙️🔗*/}
            <p className="text-md py-3 leading-7 text-gray-700 md:text-xl max-w-lg mx-auto dark:text-white md:max-w-4xl">
              👋 Bonjour! I am a passionate Computer Science Student immersed in
              the captivating realm of Web Development 🌐. With boundless
              enthusiasm, I create mesmerizing 📱applications, elegant ⚜️sites,
              and captivating 📝designs.
              <br></br>
              <br></br>
              As a lifelong 🙇‍♂️learner, I wholeheartedly embrace continuous
              growth and improvement, honing my Frontend skills. However, I a m
              eager to broaden my horizons and gain more exposure 🚀 As my goal
              extends in making myself a quality Full Stack developer😉
            </p>
            <div className="text-4xl flex justify-center gap-16 py-10 text-gray-600 md:gap-40 dark:text-gray-400">
              <a href="https://twitter.com/DotLasher" target="_blank">
                <AiFillTwitterCircle className="hover:text-black dark:hover:text-white cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/vidhan-solanki-184695226/"
                target="_blank"
              >
                <AiFillLinkedin className="hover:text-black dark:hover:text-white  cursor-pointer" />
              </a>
              <a href="https://github.com/Vidhanvyrs" target="_blank">
                <AiFillGithub className="hover:text-black dark:hover:text-white  cursor-pointer" />
              </a>
            </div>
          </div>
        </section>
        <section className="text-center py-10">
          <div>
            <h3 className="text-3xl  dark:text-cyan-800 font-burtons">
              Skills & Services
            </h3>
            <p className="text-lg py-2 leading-7 text-gray-700 dark:text-white">
              📄 Technical skills are the specialized knowledge and expertise
              required to perform specific tasks and use specific tools and
              programs in real-world situations. Thats the definition, which is
              💯 correct. However, skills are not limited to professional
              settings alone; they are a vital part of our daily lives. And when
              it comes to technical skills, they are often acquired through
              unwavering consistency 💪 and sheer hard work! 🗿
            </p>
            <p className="text-lg py-2 leading-7 text-gray-700 dark:text-white ">
              As a 🧑Fresher I do not possess a lot of skills but the ones i
              possess are what shows my dignity,hardwork as well as discipline
              towards my goal🎯 <br></br>Below are my Skills ⬇️
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={code}
                alt="code"
                className="mx-auto"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 font-burtons">
                Developer & Designer
              </h3>
              <p className="py-3">
                I combine my technical expertise with a keen eye for aesthetics
                to create visually stunning and highly functional web
                experiences. I believe in the seamless integration of design and
                development to deliver exceptional
              </p>
              <h4 className="py-4 text-teal-600">
                Frameworks/Technologies I use
              </h4>
              <ul className=" text-gray-700">
                <li className="py-1">- ReactJs</li>
                <li className="py-1">- Tailwind</li>
                <li className="py-1">- Figma</li>
                <li className="py-1">- Git</li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={edu}
                alt="edu"
                className="mx-auto"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 font-burtons">
                Technical Skills
              </h3>
              <p className="py-3">
                I possess a diverse set of technical skills that empower me to
                tackle complex challenges and deliver high-quality solutions.
                With a solid foundation in web development, I am well-versed in
                the latest technologies and frameworks.
              </p>
              <h4 className="py-4 text-teal-600">Languages I use</h4>
              <ul className=" text-gray-700">
                <li className="py-1">- Java</li>
                <li className="py-1">- Javascript</li>
                <li className="py-1">- HTML5</li>
                <li className="py-1">- CSS3</li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 ">
              <Image
                src={consult}
                alt="code"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8  pb-2 font-burtons">
                Passion
              </h3>
              <p className="py-3">
                Passion fuels my drive and motivates me to excel in my work. It
                is the burning desire that propels me to explore new
                technologies, push boundaries.This passion drives me to create
                innovative and impactful solutions
              </p>
              <h4 className="py-4 text-teal-600">Qualities I display</h4>
              <ul className=" text-gray-700">
                <li className="py-1">- Quick learner</li>
                <li className="py-1">- Team collaboration</li>
                <li className="py-1">- Strong problem-solving skills</li>
                <li className="py-1">- Proactive approach</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="text-center py-8">
          <div>
            <h3 className="text-3xl py-1 dark:text-cyan-800 font-burtons">
              Portfolio
            </h3>
            <p className="text-md py-2 leading-7 text-gray-700 dark:text-white">
              Since the beginning of my 🗺️journey as a 🔰frontend developer I
              have done a lot of work on my projects & my skills I have gone
              through some Udemy courses, some youtube courses, Made some
              💻projects for my portfolio✅ that have made me proficient in my
              skills and made me excel in my journey Thats how it went till now.
              I am for sure Not rich in experience but i am a quick learner and
              thats what matters❗
            </p>
            <p className="text-md py-2 leading-7 text-gray-700 dark:text-white">
              Here are some of the projects that signifies my React and Web D
              skills⬇️
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 group relative">
              <a href="https://mealxotic-me8k.vercel.app/">
                <Image
                  src={web1}
                  alt="web1"
                  className="rounded-lg object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
                  width={"100%"}
                  height={"100%"}
                />
              </a>
            </div>

            <div className="basis-1/3 flex-1 ">
              <a href="#">
                {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-opacity duration-300 text-transparent hover:text-white">
                  WEATHER UPDATE
                </div> */}
                <Image
                  src={web2}
                  alt="web2"
                  className="rounded-lg object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
                  width={"100%"}
                  height={"100%"}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://expense-tracker-pi-gray.vercel.app/">
                <Image
                  src={web3}
                  alt="web3"
                  className="rounded-lg object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
                  width={"100%"}
                  height={"100%"}
                />
              </a>
            </div>

            <div className="basis-1/3 flex-1">
              <a href="#">
                <Image
                  src={web4}
                  alt="web4"
                  className="rounded-lg object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
                  width={"100%"}
                  height={"100%"}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://vidhanvyrs.github.io/PackageMan/">
                <Image
                  src={web5}
                  alt="web5"
                  className="rounded-lg object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
                  width={"100%"}
                  height={"100%"}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://vidhanvyrs.github.io/MonsterMarket/">
                <Image
                  src={web6}
                  alt="web6"
                  className="rounded-lg object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
                  width={"100%"}
                  height={"100%"}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://vidhanvyrs.github.io/OldNetflix/">
                <Image
                  src={web7}
                  alt="web7"
                  className="rounded-lg object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
                  width={"100%"}
                  height={"100%"}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://vidhanvyrs.github.io/GymLandingPage/">
                <Image
                  src={web8}
                  alt="web8"
                  className="rounded-lg object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
                  width={"100%"}
                  height={"100%"}
                />
              </a>
            </div>
          </div>
        </section>

        <footer className="text-center py-8  bg-stone-100 shadow-lg rounded-xl  dark:bg-gray-900 dark:text-gray-200">
          <div>
            <h3 className="text-3xl py-10 dark:text-cyan-800 font-burtons">
              Connect with me and Share your thoughts 💭
            </h3>
            <form className="mx-auto max-w-md">
              {/* <label className="block">Name</label> */}
              <input
                type="text"
                name="user_name"
                placeholder="📛  Your Name"
                className="my-2 bg-gray-200 border border-gray-300 rounded-lg text-gray-700 font-serif outline-none p-3 w-96"
              />
              {/* <label className="block">Email</label> */}
              <input
                type="email"
                name="user_email"
                placeholder="📧  Your E-mail"
                className="my-2 bg-gray-200 border border-gray-300 rounded-lg  text-gray-700 font-serif outline-none p-3 w-96"
              />
              {/* <label className="block">Message</label> */}
              <textarea
                name="message"
                placeholder="✍️  Write Me Here "
                className="my-2 bg-gray-200 border border-gray-300 rounded-lg text-gray-700 font-serif outline-none p-3 w-96 h-48"
              ></textarea>
              <input
                type="submit"
                value="Send"
                className="my-2 text-lg rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-burtons outline-none p-3 w-52 cursor-pointer"
              />
            </form>
          </div>
        </footer>
      </main>
    </div>
  );
}
