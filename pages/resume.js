import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Navbar from "./components/Navbar";
import swe from "../public/swe.JPG";
import poet from "../public/thepoet.jpeg";
import Image from "next/image";
import Link from 'next/link';
import terraform from "../public/terraform.gif"


export default function resume() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""} class="self-center">
      <Head>
        <title>Resume</title>
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
          <div className="text-center p-10 py-10">
            <h2 className="pb-10 text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              My Experiences
            </h2>
            {/* <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Engineer @ Terraform Construction
            </h3> */}
            <div>
            <table class="table-auto text-white">
                <tbody>
                    <tr>
                        <td class="p-5 text-xl">March 2022 - Current</td>
                        <td class="text-xl">Software Engineer</td>
                        <td class="p-5 text-xl">Terraform Construction</td>
                        
                    </tr>
                    <tr>
                        <td class="p-5 text-xl">August 2019 - Current</td>
                        <td class="p-5 text-xl">Co-Worker</td>
                        <td class="p-5 text-xl">IKEA</td>
                    </tr>
                    <tr>
                        <td class="p-5 text-xl">June 2019 - Current</td>
                        <td class="p-5 text-xl">Lead Tutor</td>
                        <td class="p-5 text-xl">More than Ideal Tutorial</td>
                    </tr>
                    <tr>
                        <td class="p-5 text-xl">May 2023 - July 2023</td>
                        <td class="p-5 text-xl">Software Engineering Fellow</td>
                        <td class="p-5 text-xl">Bloomberg Summer Accelerator Program</td>
                    </tr>
                    <tr>
                        <td class="p-5 text-xl">April 2018 - April 2019</td>
                        <td class="p-5 text-xl">Sales Specialist</td>
                        <td class="p-5 text-xl">The Home Depot</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className="rounded-lg p-5 mx-auto bg-gradient-to-b from-teal-500 w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={swe} layout="fill" objectFit="cover" />
            </div>

            <h3 className="pt-20 text-2xl py-2 dark:text-white md:text-3xl">
              Shadman the Creative
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto md:text-xl">
            As a multi-talented individual, I have had the privilege of delving into various forms of art throughout my life. From singing, dancing, drawing, and writing, I have explored the full spectrum of creative expression. My artistic nature extends beyond just these mediums and permeates into all aspects of my life. From the way I carefully curate my daily outfits, to the imaginative flair I bring to my software engineering projects, to the nightly reflections I document through sketches and journal entries.
            <br/>
            <br/>
            I am proud to call myself a creative at heart, and find solace in the written word whenever I experience heartbreak. My poetry, which can be found on my Instagram page @thelifeofshadman, offers a deeper insight into who I am as a person. While I may have dabbled in music and have a track on SoundCloud (not one of my finest moments), my true passion lies elsewhere.
            <br/>
            <br/>
            Software Engineering may be a profession I love and hold close to my heart, but I believe in having multiple passions and pursuing them all with equal fervor. One of my dreams is to start my own cafe-bar hybrid, where people can come to refuel and unwind. A bright and inviting space, filled with the aroma of espresso, natural greenery, and a hint of whiskey. By day, it would be a place for collaboration and productivity, while by night, it would be a cozy refuge to relax and do what your heart desires.
            </p>
            <div className="rounded-lg p-5 mx-auto bg-gradient-to-b from-teal-500 w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={poet} layout="fill" objectFit="cover" />
            </div>
          </div> 
        </section>
      </main>
    </div>
  );
}