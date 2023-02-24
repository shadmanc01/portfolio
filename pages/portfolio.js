import Head from "next/head";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
    AiFillMediumCircle,
    AiFillGithub,
  } from "react-icons/ai";
  
  import { 
    FaReact,
    FaAngular,
    FaBootstrap,
    FaFigma,
  } from "react-icons/fa";
  
  import { 
    SiJavascript,
    SiTypescript,
    SiPython,
    SiPostgresql,
    SiSocketdotio,
    SiJsonwebtokens,
    SiCss3,
    SiHtml5
  } from "react-icons/si";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import intothegrass from "../public/intothegrass.jpeg";
import bees from '../public/bees.PNG'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <Link href='/'><h1 className="font-helvetica text-xl">SC</h1></Link>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <Navbar/>
            </ul>
          </nav>
          <div className="">
            <h2 className="text-center p-10 py-10 text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Shadman's Portfolio
            </h2>
            <h2 className='text-6xl py-2 text-sky-600 font-medium dark:text-sky-400 md:text-5xl pt-10'>mentee.</h2>
            <h1 className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">mentee. is an application for high-school graduates or GED holders from underprivileged communities and nontraditional backgrounds looking to build career skills through mentorship and community. Mentees can practice technical code, learn what a career in tech looks like, and receive support from mentors and Mentee friends via live communication throughout their career journey. mentee. was built using React, React Router, Crypt, socket.io, MUI, JWT, Node.js, PostgreSQL, NPM, and express.js.</h1>
            <div className="pb-10">
            <h3 className="text-3xl py-2 text-sky-600 font-medium dark:text-sky-400 md:text-3xl pt-10">Technologies Utilized</h3>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <FaReact />
              {/* <FaAngular /> */}
              <SiJavascript />
              {/* <SiTypescript /> */}
              <SiPostgresql />
              {/* <SiPython /> */}
              <SiSocketdotio />
              <FaFigma />
              <SiCss3 />
              <SiJsonwebtokens />
              <FaBootstrap />
            </div>
            
          </div>
          <h3 className="text-3xl py-2 text-sky-600 font-medium dark:text-sky-400 md:text-3xl pt-10">Demo</h3>
            <iframe className='pb-10'width="840" height="472.5" src="https://www.youtube.com/embed/d5YbjtlOdD4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <Link href='https://github.com/mentee-marcy'><h3 className="dark:md:hover:text-sky-300 text-center p-10 text-3xl py-2 text-sky-600 font-medium dark:text-sky-400 md:text-3xl pt-10">Github Repo</h3></Link>
          </div>

          <div className="">
            <h2 className='text-5xl py-2 text-yellow-900 font-medium dark:text-yellow-900 md:text-5xl pt-20'>snkrHub</h2>
            <h1 className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">snkrHub is an online portfolio which allows users to compile their sneakers and add sneakers to their wishlist. Displaying current market prices along with a total estimation of value for your collection. snkrHub was built using Node.JS, Express, BCrypt, PostgreSQL, TablePlus, Javascript, Knex.JS, HTML, CSS, and Bootstrap.</h1>
            <div className="pb-10">
            <h3 className="text-3xl py-2 text-yellow-900 font-medium dark:text-yellow-900 md:text-3xl pt-10">Technologies Utilized</h3>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              {/* <FaReact /> */}
              {/* <FaAngular /> */}
              <SiJavascript />
              {/* <SiTypescript /> */}
              <SiPostgresql />
              {/* <SiPython /> */}
              {/* <SiSocketdotio /> */}
              <FaFigma />
              <SiCss3 />
              <SiJsonwebtokens />
              <FaBootstrap />
            </div>
            
          </div>
          <h3 className="text-3xl py-2 text-yellow-900 font-medium dark:text-yellow-900 md:text-3xl pt-10">Demo</h3>
          <iframe className='pb-10'width="840" height="472.5" src="https://www.youtube.com/embed/V5hJmcChumg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <Link href='https://github.com/mentee-marcy'><h3 className="dark:md:hover:text-yellow-800 text-center p-10 text-3xl py-2 text-yellow-900 font-medium dark:text-yellow-900 md:text-3xl pt-10">Github Repo</h3></Link>
          </div>

          <div className="">
            <h2 className='text-5xl py-2 text-sky-600 font-medium dark:text-sky-400 md:text-5xl pt-10'>DoMore</h2>
            <h1 className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">DoMore is an interactive productivity app, centered around the user and their mental well-being. DoMore was built using Javascript, CSS, HTML, Bootstrap with supplemental applications such as Figma and Photoshop to design the UI.</h1>
            <div className="pb-10">
            <h3 className="text-3xl py-2 text-sky-600 font-medium dark:text-sky-400 md:text-3xl pt-10">Technologies Utilized</h3>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <SiJavascript />
              <FaFigma />
              <SiCss3 />
              <FaBootstrap />
            </div>
            
          </div>
          <h3 className="text-3xl py-2 text-sky-600 font-medium dark:text-sky-400 md:text-3xl pt-10">Demo</h3>
          <iframe className='pb-10'width="840" height="472.5" src="https://www.youtube.com/embed/zKlW_uEFiPA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <Link href='https://github.com/shadmanc01/DoMore'><h3 className="dark:md:hover:text-sky-300 text-center p-10 text-3xl py-2 text-sky-600 font-medium dark:text-sky-400 md:text-3xl pt-10">Github Repo</h3></Link>
          </div>

          <div className="">
            <h2 className='text-5xl py-2 text-red-600 font-medium dark:text-red-400 md:text-5xl pt-10'>Into the Tall Grass</h2>
            <h1 className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">Pokémon and Mario fans can come together for a platform game inspired on the events that occur if you don't have a Pokémon with you and venture off into the world. This game was created by my amazing team and I using Javascript, HTML, CSS, Photoshop, Figma, and 8Bit Paint.</h1>
            <div className="pb-10">
            <h3 className="text-3xl py-2 text-red-600 font-medium dark:text-red-400 md:text-3xl pt-10">Technologies Utilized</h3>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <SiJavascript />
              <FaFigma />
              <SiCss3 />
              <FaBootstrap />
            </div>
            
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={intothegrass} layout="fill" objectFit="cover" />
          </div>
          <Link href='https://shadmanc01.github.io/IntoTheTallGrass/'><h3 className="dark:md:hover:text-sky-300 text-center p-10 text-3xl py-2 text-red-600 font-medium dark:text-red-400 md:text-3xl pt-10">Play Now</h3></Link>
            <Link href='https://github.com/shadmanc01/IntoTheTallGrass'><h3 className="dark:md:hover:text-sky-300 text-center p-10 text-3xl py-2 text-red-600 font-medium dark:text-red-400 md:text-3xl pt-10">Github Repo</h3></Link>
          </div>

          <div className="">
            <h2 className='text-5xl py-2 text-amber-300 font-medium dark:text-amber-300 md:text-5xl pt-10'>For The Bee's</h2>
            <h1 className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">For the Bee's is a website created by my team at Marcy Lab. For the Bee's is a cause that I hold dear to my heart and I was able to make it come to life through this website. Check out the page to hear about why the declining bee population is absolutely detrimental to our environment. I was in charge of the UI, landing page, and the donate page. I utilized tools such as HTML5, CSS, JavaScript, and Adobe Photoshop to develop this website.</h1>
            <div className="pb-10">
            <h3 className="text-3xl py-2 text-amber-300 font-medium dark:text-amber-300 md:text-3xl pt-10">Technologies Utilized</h3>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <SiHtml5/>
              <FaFigma />
              <SiCss3 />
              <FaBootstrap />
            </div>
            
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 w-100 h-100 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={bees} layout="fill" objectFit="cover" />
          </div>
          <Link href='https://shadmanc01.github.io/IntoTheTallGrass/'><h3 className="dark:md:hover:text-sky-300 text-center p-10 text-3xl py-2 text-amber-300 font-medium dark:text-amber-300 md:text-3xl pt-10">Check it Out</h3></Link>
            <Link href='https://github.com/shadmanc01/IntoTheTallGrass'><h3 className="dark:md:hover:text-sky-300 text-center pb-15 p-10 text-3xl py-2 text-amber-300 font-medium dark:text-amber-300 md:text-3xl pt-10">Github Repo</h3></Link>
          </div>
        </section>
        <section>
        </section>
      </main>
    </div>
  );
}