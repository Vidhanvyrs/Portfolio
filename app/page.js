"use client";
import { useState } from "react";
import Image from "next/image";
import dotlasher from "public/avatar.jpeg";
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
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export default function Home() {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 dark:bg-gray-900 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-10 flex justify-between">
            <a className="cursor-pointer text-xl font-burtons">
              <h1 className="dark:text-white ">DotLasher</h1>
            </a>
            <ul className="flex items-center dark:text-white">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => {
                    setdarkMode(!darkMode);
                  }}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-7 hover:animate-bounce"
                  href="#"
                >
                  RESUME
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-5">
            <h2 className="text-5xl py-2 text-teal-700 font-medium font-burtons leading-3 md:text-6xl">
              Vidhan Solanki
            </h2>
            <h3 className="text-xl py-5  font-burtons md:text-3xl dark: text-cyan-800">
              Programmer & Developer
            </h3>
            <p className="text-md py-3 leading-7 text-gray-700 md:text-xl max-w-lg mx-auto dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugit
              inventore explicabo nobis quasi ea sapiente, quos recusandae!
              Lorem ipsum dolor sit amet consequuntur?
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
            <div className="py-6">
              <Image
                src={dotlasher}
                alt="dotlasher"
                className="mx-auto  rounded-full shadow-lg w-60 h-60 object-cover m-5 overflow-hidden md:w-80 md:h-80 dark:shadow-lg"
              />
            </div>
          </div>
        </section>
        <section className="text-center py-8">
          <div>
            <h3 className="text-3xl  dark:text-cyan-800 font-burtons">
              Skills & Services
            </h3>
            <p className="text-lg py-2 leading-7 text-gray-700 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quibusdam corrupti deserunt numquam debitis consequatur fuga
              doloribus, cupiditate ducimus adipisci delectus consectetur
              voluptate quam temporibus earum explicabo nisi repudiandae
              voluptatum?
            </p>
            <p className="text-lg py-2 leading-7 text-gray-700 dark:text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              eos facilis voluptatum aliquid enim blanditiis ullam
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={code}
                alt="code"
                className="mx-auto"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 font-burtons">
                Develop & Design
              </h3>
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                possimus eos veniam sunt vel,
              </p>
              <h4 className="py-4 text-teal-600">Tools I use</h4>
              <ul className=" text-gray-700">
                <li className="py-1"> Vs Code</li>
                <li className="py-1"> Intellij</li>
                <li className="py-1"> Figma</li>
                <li className="py-1"> Photoshop</li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                possimus eos veniam sunt vel,
              </p>
              <h4 className="py-4 text-teal-600">Tools I use</h4>
              <ul className=" text-gray-700">
                <li className="py-1"> Vs Code</li>
                <li className="py-1"> Intellij</li>
                <li className="py-1"> Figma</li>
                <li className="py-1"> Photoshop</li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white ">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                possimus eos veniam sunt vel,
              </p>
              <h4 className="py-4 text-teal-600">Tools I use</h4>
              <ul className=" text-gray-700">
                <li className="py-1"> Vs Code</li>
                <li className="py-1"> Intellij</li>
                <li className="py-1"> Figma</li>
                <li className="py-1"> Photoshop</li>
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              ipsam saepe nam fugiat animi optio perspiciatis, nobis amet
              voluptatibus, aliquam eveniet inventore illo fuga! Mollitia nam
              repudiandae commodi sapiente laudantium.
            </p>
            <p className="text-md py-2 leading-7 text-gray-700 dark:text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              eos facilis voluptatum aliquid enim blanditiis ullam
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt="web1"
                className="rounded-lg object-cover shadow-xl"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={web2}
                alt="web2"
                className="rounded-lg object-cover shadow-xl"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt="web3"
                className="rounded-lg object-cover shadow-xl"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt="web4"
                className="rounded-lg object-cover shadow-xl"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                alt="web5"
                className="rounded-lg object-cover shadow-xl"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                alt="web6"
                className="rounded-lg object-cover shadow-xl"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web7}
                alt="web7"
                className="rounded-lg object-cover shadow-xl"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web8}
                alt="web8"
                className="rounded-lg object-cover shadow-xl"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
