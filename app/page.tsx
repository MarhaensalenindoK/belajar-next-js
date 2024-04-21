"use client"
import React from "react";
import Image from "next/image";
import { useEffect, useRef  } from 'react';

import myPhoto from "../public/about/my-photo.jpg";
import skillPhoto from "../public/framework/laravel.png";


import CardAbout from "./component/cardAbout";
import SkillBar from "./component/skillBar";
import ImageLanguages from "./component/imageLanguages";

import FontAwesomeIcon from "./component/FontAwesome";
import Link from "next/link";

// Helper function for linear interpolation
function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

// The reusable function to start the gradient animation
function startGradientAnimation(gradientElement, startColors, endColors, basicColor, typeGradient) {
    let startTime = null;

    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / 2000; // Adjust duration as needed

        // Calculate the interpolated color
        const r = Math.round(lerp(startColors.r, endColors.r, progress));
        const g = Math.round(lerp(startColors.g, endColors.g, progress));
        const b = Math.round(lerp(startColors.b, endColors.b, progress));

        // Apply the gradient to the element
        gradientElement.style.backgroundImage = `linear-gradient(to ${typeGradient}, rgb(${r}, ${g}, ${b}), ${basicColor})`;

        // Loop the animation
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            startColors = endColors;
            endColors = { r: Math.random() * 256, g: Math.random() * 256, b: Math.random() * 256 };
            startTime = null;
            requestAnimationFrame(step);
        }
    };

    requestAnimationFrame(step);
}

const Page = () => {
    // useEffect(() => {
    //     // Fungsi untuk mengupdate gradient berdasarkan posisi kursor
    //     function updateGradient(event) {
    //     let gradientElements = document.getElementsByClassName('gradient-about');
    
    //     if (gradientElements.length > 0) {
    //         let gradientElement = gradientElements[0]; // Mengambil elemen pertama
    //         let gradientRect = gradientElement.getBoundingClientRect();
    
    //         // Menghitung posisi x dan y relatif terhadap elemen
    //         let x = (event.clientX / window.innerWidth) * 100;
    //         let y = ((event.clientY - gradientRect.top) / gradientElement.clientHeight) * 100;
    
    //         // Memastikan bahwa x dan y tidak melebihi 100% atau kurang dari 0%
    //         x = Math.min(Math.max(x, 0), 100);
    //         y = Math.min(Math.max(y, 0), 100);
    
    //         // Memastikan bahwa x dan y tidak kurang dari nilai tertentu, misal 20%
    //         x = Math.max(x, 20);
    //         y = Math.max(y, 20);
    
    //         // Mengatur warna gradient yang cerah
    //         const r = Math.floor(152 + (103 * (x / 100)));
    //         const g = Math.floor(171 + (84 * (y / 100)));
    //         const b = 238; // Nilai B tetap
    
    //         // Mengatur properti background image
    //         gradientElement.style.backgroundImage = 
    //         `linear-gradient(to top right, rgb(${r}, ${g}, ${b}), rgb(249, 232, 201))`;
    //     }
    //     }
    
    //     // Menambahkan event listener ke window untuk mendeteksi pergerakan mouse
    //     window.addEventListener('mousemove', updateGradient);
    
    //     // Menghapus event listener saat komponen di-unmount
    //     return () => {
    //     window.removeEventListener('mousemove', updateGradient);
    //     };
    // }, []);

    const animationFrameId = useRef();

    useEffect(() => {
        // Grab the elements
        const gradientAbout = document.getElementsByClassName('gradient-about')[0];
        const gradientSkill = document.getElementsByClassName('gradient-skill')[0];
    
        // Define start and end colors for each gradient
        const aboutStartColors = { r: 152, g: 171, b: 238 };
        const aboutEndColors = { r: 242, g: 123, b: 189 };
        const skillStartColors = { r: 255, g: 0, b: 0 };
        const skillEndColors = { r: 255, g: 192, b: 203 };
        const basicColorAbout = '#201658';
        const basicColorSkill = '#201658';
    
        // Start the gradient animation for each element
        if (gradientAbout) startGradientAnimation(gradientAbout, aboutStartColors, aboutEndColors, basicColorAbout, 'bottom');
        if (gradientSkill) startGradientAnimation(gradientSkill, skillStartColors, skillEndColors, basicColorSkill, 'top');
    }, []);

return (
    <>
        <div className="container mx-auto px-5 min-h-screen flex flex-col items-center justify-center">
            <div className="flex w-full max-w-4xl items-center justify-center container">
                <div className="flex-1">
                    <section className="mb-8">
                        <h2
                        className="text-2xl mb-3"
                        data-aos="zoom-in-up"
                        data-aos-delay="100"
                        >
                        Marhaen's Website
                        </h2>
                        <p
                        className="text-lightBlue max-w-md"
                        data-aos="zoom-in-up"
                        data-aos-delay="500"
                        >
                            In addition to having a deep understanding of computer and
                            software technology, I am adept at creating new programs to
                            increase productivity in the workplace. I also possess strong
                            analytical and problem-solving skills, as well as the ability to
                            make well-considered decisions in unexpected situations. My goal
                            is to work in a progressive company where I can use my skills
                            while learning the latest technologies to advance the company
                            and develop professionally by working in a company that gives me
                            the opportunity to learn more about new technologies. Therefore,
                            I would like to use this profile as a means of showcasing my
                            skills
                        </p>
                    </section>
                    <section>
                    <h2
                        className="text-2xl mb-3"
                        data-aos="fade-up"
                        data-aos-delay="800"
                    >
                        Show Project's
                    </h2>
                    <button
                        className="bg-cream text-darkBlue px-6 py-2 rounded hover:bg-opacity-80"
                        data-aos="fade-up"
                        data-aos-delay="1000"
                    >
                        Get Started
                    </button>
                    </section>
                </div>

                {/* Kolom Logo */}
                <div
                    className="flex-1 items-center justify-center hidden md:block"
                    data-aos="fade-left"
                    data-aos-delay="1200"
                >
                    <div className="w-96 h-96 flex items-center justify-center">
                    <img src="/5-wt-bg.png" alt="MDA-Logo" />
                    </div>
                </div>
            </div>
        </div>

      {/* About me */}
        <section className="w-100 mx-auto py-4 text-darkBlue gradient-about">
            <div className="px-16 py-8 text-center text-cream">
                <h1 className="w-full text-5xl mb-4"
                data-aos="zoom-in-up"
                >About Me</h1>

                <h2 className="text-2xl mb-2"
                data-aos="zoom-in-up"
                data-aos-delay="500"
                >Thanks for read this ...</h2>

                <h3 className="text-lg mb-2"
                data-aos="zoom-in-up"
                data-aos-delay="500">
                    Hello, my name is Marhaen, and I am a dedicated front-end web
                    developer. I have a profound passion for learning new languages.
                    Currently, I am delving into Next.js, and my future goal is to
                    explore the fascinating realm of Artificial Intelligence.
                </h3>

                <div className="w-100"
                data-aos="zoom-in-up"
                data-aos-delay="800">
                    <div className="px-4 py-4">
                        <Image
                            src={myPhoto}
                            className="shadow-2xl rounded-full max-w-full mx-auto w-48"
                            alt="My Photo"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 bg-darkBlue rounded-lg m-16 mb-8 mt-0 p-5 shadow-2xl"
            data-aos="zoom-in-up"
            data-aos-delay="800">
                <CardAbout 
                    icon={["fas", "laptop-code"]} 
                    title="Programming" items={["CSS, HTML, Javascript, Java, PHP."]} 
                    colorContent="cream" 
                    colorCard="to-pink-500" 
                />

                <CardAbout 
                    icon={["fas", "chart-simple"]} 
                    title="Trading" items={["Cryptho, Saham, Forex. Applying Trading view."]} 
                    colorContent="darkBlue" 
                    colorCard="to-gray-200" 
                />

                <CardAbout 
                    icon={["fas", "microscope"]} 
                    title="Interest" items={["Next roadmap is Artificial Intelligence."]} 
                    colorContent="cream" 
                    colorCard="to-pink-500" 
                />
            </div>
        </section>
        
        {/* Framework Skill */}
        <section className="w-100 mx-auto py-20 text-darkBlue gradient-skill">
            <div className="flex flex-wrap">
                <div className="w-100 md:w-4/12 ml-auto mr-auto px-4 text-center my-auto"
                data-aos="zoom-in-up"
                data-aos-delay="0">
                    <Image
                        src={skillPhoto}
                        className="max-w-full mx-auto w-80"
                        alt="skillPhoto"
                    />
                </div>
                <div className="w-96  md:w-5/12 md:mt-0 ml-auto mr-auto p-10 bg-gradient-to-b from-purple-700 to-pink-500 text-white rounded-2xl shadow-2xl"
                data-aos="zoom-in-up"
                data-aos-delay="0">
                    <div className="md:pr-12">
                        <h1 className="w-full text-5xl mb-4 text-center">Skill Framework</h1>

                        <div className="mb-4">
                            <hr className="border-darkBlue w-1/4 rounded mx-auto"/>
                        </div>

                        <p className="mt-4 text-lg">
                            Here, I'd like to share a comparison of my skill levels across various frameworks, focusing on my personal proficiency rather than a global consensus on these frameworks.
                        </p>

                        <ul className="list-none mt-4">
                            <SkillBar skill="Laravel" level={100}/>
                            <SkillBar skill="Nextjs" level={50}/>
                            <SkillBar skill="Bootstrap" level={80}/>
                            <SkillBar skill="Tailwind" level={40}/>
                            <SkillBar skill="Trading View" level={30}/>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Recent Work */}
        <section className="mx-auto py-8">
            <div className="text-center mb-8">
                <h1 className="my-2 text-5xl text-cream"
                data-aos="zoom-in-up"
                data-aos-delay="100">
                    My Recent Work
                </h1>

                <div className="mb-4"
                data-aos="zoom-in-up"
                data-aos-delay="100">
                    <hr className="border-cream w-1/4 rounded mx-auto"/>
                </div>

                <p className="text-lg m-4 text-cream"
                data-aos="zoom-in-up"
                data-aos-delay="200">
                    Would you like to know what I do for a living? Dive in below to discover my work in IDS Rumah Pendidikan!
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-8 text-center">
                <div className="bg-blue-500 p-4 m-2 shadow-2xl rounded text-1xl"
                data-aos="zoom-in-up"
                data-aos-delay="300">
                    Learning Content
                </div>
                <div className="bg-pink-500 p-4 m-2 shadow-2xl rounded text-1xl"
                data-aos="zoom-in-up"
                data-aos-delay="400">
                    Learning Management System (LMS)
                </div>
                <div className="bg-blue-700 p-4 m-2 shadow-2xl rounded text-1xl"
                data-aos="zoom-in-up"
                data-aos-delay="500">
                    Educational Information
                </div>
                <div className="bg-pink-700 p-4 m-2 shadow-2xl rounded text-1xl"
                data-aos="zoom-in-up"
                data-aos-delay="600">
                    Curriculumn Course
                </div>
                <div className="bg-blue-900 p-4 m-2 shadow-2xl rounded text-1xl"
                data-aos="zoom-in-up"
                data-aos-delay="700">
                    Absence journal
                </div>
                <div className="bg-rose-800 p-4 m-2 shadow-2xl rounded text-1xl"
                data-aos="zoom-in-up"
                data-aos-delay="800">
                    Program Mengajar
                </div>
            </div>

            <div className="text-center"
            data-aos="zoom-in-up"
            data-aos-delay="800">
                <p className="text-lg m-4 text-cream">
                    And there's much more to my portfolio, including engaging projects related to education, curriculum systems, attendance tracking, and even the development of student teaching journals.
                </p>
                <div className="mb-4">
                    <hr className="border-cream w-1/4 rounded mx-auto"/>
                </div>
                <p className="text-lg m-4 text-cream">
                    Speaking of work, are you curious about the tools and languages that my company and I utilize? Take a look at the image below—you'll probably recognize a few!
                </p>
            </div>

            <div
            data-aos="zoom-in-up"
            data-aos-delay="800">
                <ImageLanguages />
            </div>

        </section>

        {/* Contact */}

        <section className="w-full mx-auto py-8 pt-10 min-h-screen">
            <h1 className="my-2 text-5xl text-cream text-center"
            data-aos="zoom-in-up"
            data-aos-delay="100">
                Contact me
            </h1>

            <div className="container p-4 mb-6 w-full lg:w-1/2 shadow-lg rounded-lg bg-cream text-darkBlue mx-auto shadow-2xl mt-4"
            data-aos="zoom-in-up"
            data-aos-delay="200">
                <div className="p-5 lg:p-10">
                    <h4 className="font-semibold"
                    data-aos="zoom-in-up"
                    data-aos-delay="300">
                        Come Connect With Me!
                    </h4>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-4">
                        <Link href={'https://wa.me/6285774394530?text=Hi%20there!%20I%27m%20interested%20in%20your%20portfolio.'} rel="noopener noreferrer" target="_blank" className="bg-green-500 flex gap-4 rounded-lg text-cream w-full p-4 shadow-lg"
                        data-aos="zoom-in-up"
                        data-aos-delay="500">
                            <div>
                                <FontAwesomeIcon icon={['fas', 'phone']}  />
                            </div>
                            <p>
                                WhatsApp
                            </p>
                        </Link>
                        <Link href={'https://www.linkedin.com/in/marhaensalenindo-komara-75a713193/'} rel="noopener noreferrer" target="_blank" className="bg-[#0E76A8] flex gap-4 rounded-lg text-cream w-full p-4 shadow-lg"
                        data-aos="zoom-in-up"
                        data-aos-delay="800">
                            <div>
                                <FontAwesomeIcon icon={['fas', 'link']}  />
                            </div>
                            <p>
                                Linkedin
                            </p>
                        </Link>
                        <Link href={'https://www.instagram.com/marhaensa'} rel="noopener noreferrer" target="_blank" className="gradient-instagram flex gap-4 rounded-lg text-cream w-full p-4 shadow-lg"
                        data-aos="zoom-in-up"
                        data-aos-delay="1100">
                            <div>
                                <FontAwesomeIcon icon={['fas', 'user']}  />
                            </div>
                            <p>
                                Instagram
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-center text-cream mt-72 text-xl"
            data-aos="zoom-in-up"
            data-aos-delay="100">
                <p className="italic">"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</p>
                <p>Keep this in mind as you hit the books. Each page you turn builds a stronger foundation for your future.</p>
            </div>
        </section>

        <footer className="bg-cream p-4 w-full text-darkBlue h-14 text-center">
            <p>Copyrigth@marhaensa</p>
        </footer>
    </>
    );
};

export default Page;
