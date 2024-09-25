import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import play2 from '../assets/play2.png'
import play3 from '../assets/play3.png'
import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile2.png'
import robot from '../assets/robot.jpg'
import robot2 from '../assets/robot2.png'
import robot3 from '../assets/robot3.png'
import Card1 from '../assets/Card1.png'
import Card2 from '../assets/Card2.png'
import Card3 from '../assets/Card3.png'
import Card4 from '../assets/Card4.png'
import Card5 from '../assets/Card5.png'
import Card6 from '../assets/Card6.png'
import Card7 from '../assets/Card7.png'
import Card8 from '../assets/Card8.png'
import Card9 from '../assets/Card9.png'
import btnicon1 from '../assets/btnicon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import logo from '../assets/logo.jpg'
import profile3 from '../assets/profile3.png'
import icon1 from '../assets/icon1.png'
import micIcon1 from '../assets/micIcon1.png'
import micIcon2 from '../assets/micIcon2.png'
import roundIcon2 from '../assets/roundIcon2.png'
import listIcon from '../assets/listIcon.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'
import icon7 from '../assets/icon7.png'
import icon8 from '../assets/icon8.png'
import icon9 from '../assets/icon9.png'
import icon10 from '../assets/icon10.png'
import icon11 from '../assets/icon11.png'
import icon12 from '../assets/icon12.png'
import icon13 from '../assets/icon13.png'
import icon14 from '../assets/icon14.png'
import icon15 from '../assets/icon15.png'
import icon16 from '../assets/icon16.png'
import icon17 from '../assets/icon17.png'
import icon18 from '../assets/icon18.png'
import icon19 from '../assets/icon19.png'
import icon20 from '../assets/icon20.png'
import human1 from '../assets/human1.png'
import human2 from '../assets/human2.png'
import human3 from '../assets/human3.png'
import human4 from '../assets/human4.png'
import smIcons from '../assets/smIcons.png'
import greenCard from '../assets/greenCard.svg'
import background from '../assets/background.jpg'
import fbIcon from '../assets/fbIcon.png'
import yIcon from '../assets/yIcon.png'
import twtIcon from '../assets/twtIcon.png'
import linkedIcon from '../assets/linkedIcon.png'
import Line from '../assets/Line.png'
import comment from '../assets/comment.png'
import comment2 from '../assets/comment2.png'
import round from '../assets/round.png'
import Accordion from './Accordion'



const cardData = [
    {
      image : Card1,
      tags: [
        { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
        { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
      ],
      description: 'Become a Web Developer by building real life projects',
      details: [
        { icon: icon2, text: 'Advanced' },
        { icon: icon3, text: 'Professional Certificate' },
        { icon: icon4, text: '1.5 Hour Lesson' }
      ],
      instructor: {
        image : profile3,
        name: 'Mr. John Doe',
        details: '15 years of experince, Microsoft'
        },
      price: '7000 Taka',
      originalPrice: '8,999 Taka',
      buttonText: 'Enroll Now'
    },
    {
        image : Card2,
        tags: [
          { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'Become a Web Developer by building real life projects',
        details: [
          { icon: icon2, text: 'Advanced' },
          { icon: icon3, text: 'Professional Certificate' },
          { icon: icon4, text: '1.5 Hour Lesson' }
        ],
        instructor: {
          image : profile3,
          name: 'Mr. John Doe',
          details: ' 15 years of experince, Microsoft ' 
        },
        price: '7,000 Taka',
        originalPrice: '8,999 Taka',
        buttonText: 'Enroll Now'
      },
      {
        image : Card3,
        tags: [
          { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'Become a Web Developer by building real life projects',
        details: [
          { icon: icon2, text: 'Advanced' },
          { icon: icon3, text: 'Professional Certificate' },
          { icon: icon4, text: '1.5 Hour Lesson' }
        ],
        instructor: {
          image : profile3,
          name: 'Mr. John Doe',
          details: ' 15 years of experince, Microsoft ' 
        },
        price: '7,000 Taka',
        originalPrice: '8,999 Taka',
        buttonText: 'Enroll Now'
      },
      {
        image : Card4,
        tags: [
          { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'Become a Web Developer by building real life projects',
        details: [
          { icon: icon2, text: 'Advanced' },
          { icon: icon3, text: 'Professional Certificate' },
          { icon: icon4, text: '1.5 Hour Lesson' }
        ],
        instructor: {
          image : profile3,
          name: 'Mr. John Doe',
          details: ' 15 years of experince, Microsoft ' 
        },
        price: '7,000 Taka',
        originalPrice: '8,999 Taka',
        buttonText: 'Enroll Now'
      },
      {
        image : Card5,
        tags: [
          { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'Become a Web Developer by building real life projects',
        details: [
          { icon: icon2, text: 'Advanced' },
          { icon: icon3, text: 'Professional Certificate' },
          { icon: icon4, text: '1.5 Hour Lesson' }
        ],
        instructor: {
          image : profile3,
          name: 'Mr. John Doe',
          details: ' 15 years of experince, Microsoft ' 
        },
        price: '7,000 Taka',
        originalPrice: '8,999 Taka',
        buttonText: 'Enroll Now'
      },
      {
        image : Card6,
        tags: [
          { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'Become a Web Developer by building real life projects',
        details: [
          { icon: icon2, text: 'Advanced' },
          { icon: icon3, text: 'Professional Certificate' },
          { icon: icon4, text: '1.5 Hour Lesson' }
        ],
        instructor: {
          image : profile3,
          name: 'Mr. John Doe',
          details: ' 15 years of experince, Microsoft ' 
        },
        price: '7,000 Taka',
        originalPrice: '8,999 Taka',
        buttonText: 'Enroll Now'
      },
      {
        image : Card7,
        tags: [
          { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'Become a Web Developer by building real life projects',
        details: [
          { icon: icon2, text: 'Advanced' },
          { icon: icon3, text: 'Professional Certificate' },
          { icon: icon4, text: '1.5 Hour Lesson' }
        ],
        instructor: {
          image : profile3,
          name: 'Mr. John Doe',
          details: ' 15 years of experince, Microsoft ' 
        },
        price: '7,000 Taka',
        originalPrice: '8,999 Taka',
        buttonText: 'Enroll Now'
      },
      {
        image : Card8,
        tags: [
          { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'Become a Web Developer by building real life projects',
        details: [
          { icon: icon2, text: 'Advanced' },
          { icon: icon3, text: 'Professional Certificate' },
          { icon: icon4, text: '1.5 Hour Lesson' }
        ],
        instructor: {
          image : profile3,
          name: 'Mr. John Doe',
          details: ' 15 years of experince, Microsoft ' 
        },
        price: '7,000 Taka',
        originalPrice: '8,999 Taka',
        buttonText: 'Enroll Now'
      },
      {
        image : Card9,
        tags: [
          { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'Become a Web Developer by building real life projects',
        details: [
          { icon: icon2, text: 'Advanced' },
          { icon: icon3, text: 'Professional Certificate' },
          { icon: icon4, text: '1.5 Hour Lesson' }
        ],
        instructor: {
          image : profile3,
          name: 'Mr. John Doe',
          details: ' 15 years of experince, Microsoft ' 
        },
        price: '7,000 Taka',
        originalPrice: '8,999 Taka',
        buttonText: 'Enroll Now'
      },
      {
        image : Card7,
        tags: [
          { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'Become a Web Developer by building real life projects',
        details: [
          { icon: icon2, text: 'Advanced' },
          { icon: icon3, text: 'Professional Certificate' },
          { icon: icon4, text: '1.5 Hour Lesson' }
        ],
        instructor: {
          image : profile3,
          name: 'Mr. John Doe',
          details: ' 15 years of experince, Microsoft ' 
        },
        price: '7,000 Taka',
        originalPrice: '8,999 Taka',
        buttonText: 'Enroll Now'
      },
      {
        image : Card8,
        tags: [
          { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'Become a Web Developer by building real life projects',
        details: [
          { icon: icon2, text: 'Advanced' },
          { icon: icon3, text: 'Professional Certificate' },
          { icon: icon4, text: '1.5 Hour Lesson' }
        ],
        instructor: {
          image : profile3,
          name: 'Mr. John Doe',
          details: ' 15 years of experince, Microsoft ' 
        },
        price: '7,000 Taka',
        originalPrice: '8,999 Taka',
        buttonText: 'Enroll Now'
      },
      {
        image : Card9,
        tags: [
          { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
          { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
        ],
        description: 'Become a Web Developer by building real life projects',
        details: [
          { icon: icon2, text: 'Advanced' },
          { icon: icon3, text: 'Professional Certificate' },
          { icon: icon4, text: '1.5 Hour Lesson' }
        ],
        instructor: {
          image : profile3,
          name: 'Mr. John Doe',
          details: ' 15 years of experince, Microsoft ' 
        },
        price: '7,000 Taka',
        originalPrice: '8,999 Taka',
        buttonText: 'Enroll Now'
      },
  ]
    
const Home = () => {
  return (
<div id='home' className=' font-Nunito'>
    <div className=' flex flex-col'>
    <header className=" px-4 bg-[#171719] flex flex-wrap items-center py-6 shadow-md">
        <div className="flex-1 flex justify-between items-center ">
        
            <a href="#" className="text-3xl flex font-EBGaramond text-white font-semibold pl-28 "><Image alt='' className='h-10 mr-3 rounded-full' width={56} src={logo}/>CodeCraft</a>
        </div>
        
        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden px-24  md:flex md:items-center md:w-auto w-full" id="menu">
            <nav className='py-1'>
                <ul className="md:flex items-center justify-between text-base text-[#9f9b9b] font-medium pt-4 md:pt-0 ">
                    <li><a className="md:p-4 py-3 mx-2.5 hover:text-white hover:text-lg" href="#home"> Home</a></li>
                    <li><a className="md:p-4 py-3 mx-2.5 hover:text-white hover:text-lg" href="#course"> Course</a></li>
                    <li><a className="md:p-4 py-3 mx-2.5 hover:text-white hover:text-lg" href="#about-us">About Us</a></li>
                    <li><a className="md:p-4 py-3 mx-2.5 hover:text-white hover:text-lg" href="#feedback">Blog</a></li>
                    <li><Link className="md:p-4 py-3 mx-2.5 hover:text-white hover:text-lg" href="/login">Sign In</Link></li>
                </ul>
            </nav>
        </div>
    </header>
    <div className='py-72 flex bg-[#0E0E0E] justify-center'>
        <div className='flex '>
            <div className=' space-y-3  '>
                <h3 className=' text-5xl pt-4 font-bold bg-gradient-to-b from-[#EDF1F4] to-[#C3CBDC] bg-clip-text text-transparent'>Upskill yourself ●</h3>
                <h1 className='max-w-3xl rounded-2xl mr-4 py-3 px-1 bg-gradient-to-b from-[#EDF1F4] to-[#C3CBDC] text-5xl font-bold '>Code Your Dreams Into Reality ✔</h1>
                <p  className=' max-w-3xl text-xl font-thin text-pink-500'>Join our platform to access affordable, top-rated programming courses. Develop apps, build websites, and create software that changes the world.</p>
                <div className=' flex items-center space-x-3'>
                    <button className=' h-fit text-base hover:text-pink-700 border border-pink-950 hover:bg-pink-200 py-3 px-6 text-pink-500 rounded-lg bg-[#EDF1F4]'>Our Courses</button>
                    <button className='h-fit text-base hover:text-pink-700 border border-pink-950 hover:bg-pink-200 py-3 px-6 text-pink-500 rounded-lg bg-[#EDF1F4]'>Become our community member!</button>
                    <div className=' px-14 '>
                        <Image alt='' className='w-16 cursor-pointer rounded-full  hover:shadow-pink-600 shadow-md' src ={play3}/>
                    </div>
                </div>
            </div>
            <div className='relative max-w-52 flex gap-0.5'>
                    <Image alt='' className='mb-24 relative z-10' src={robot2}/> 
                    <ul className=' absolute z-50 top-56  bg-[#EDF1F4] px-4 py-2 rounded-lg '>
                        <li><h1 className='text-black text-xl '>Join AI Training</h1></li>
                        <li><p className='text-black text-base font-light'>By our industry experts </p></li>
                    </ul>
                <div>
                    <Image alt='' className='absolute top-32 max-w-60' src={round}/>          
                </div>
                <div>
                    <Image alt='' className='absolute z-10 max-w-24' src={robot3}/>
                </div>
                {/* <div>
                    <Image alt='' className='absolute z-10 max-w-24 -top-12 -right-40 ' src={micIcon2}/>
                </div> */}
                {/* <div className=''>
                    <Image alt='' className='absolute max-w-32  ' src={round}/>
                </div> */}
                {/* <Image alt='' className='z-10 mt-24'src={profile2}/>
                <ul className='absolute z-50 top-80 left-60 w-32'>
                        <li><h1 className='text-white text-base'>আবুল কাসেম</h1></li>
                        <li><p className='text-white text-xxsm font-light'>১৫ বছরের ইন্ড্রাস্ট্রি এক্সপার্ট </p></li>
                </ul> */}
            </div>
        </div>
    </div>
    </div>

<div id='course' className=" bg-[#171719]   py-16 ">

<div className="flex text-white justify-center text-2xl md:text-4xl font-bold py-4">
Our New Courses
</div>

<ul className=" bg-[#0E0E0E] rounded-lg max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 my-10 xl:p-5  ">
      {cardData.map((card, index) => (
        <li key={index} className="relative bg-[#FAF7F0] flex flex-col justify-between border  shadow-md hover:shadow-pink-600">
          <a className="relative">
            <Image alt='' className=" relative object-cover  " src={card.image} loading="lazy" />
          </a>
          <div className="flex flex-col justify-between gap-3 px-4 py-2 mx-3">
            <div className='flex'>
              {card.tags.map((tag, i) => (
                <button key={i} type="button" className={`text-${tag.color} bg-${tag.bgColor} focus:outline-none rounded-full text-xxsm px-1.5 py-0.5 mx-1 flex`}>
                  {tag.icon && <Image alt='' className='mx-1' src={tag.icon} />}
                  {tag.text}
                  
                </button>
                
              ))}
            </div>
            <p className="text-black-600 two-lines font-bold">
              {card.description}
            </p>
            <div className='flex text-xxsm space-x-2'>
              {card.details.map((detail, i) => (
                <React.Fragment key={i}>
                  <Image alt='' className='w-3 h-3' src={detail.icon} />
                  <span>{detail.text}</span>
                </React.Fragment>
              ))}
            </div>
            <div className='flex items-center'>
              <Image className='w-12' alt='' src={card.instructor.image} />
              <div className='mx-1'>
                <h1 className='text-sm font-bold'>{card.instructor.name}</h1>
                <p className='text-xxsm'>{card.instructor.details}</p>
              </div>
            </div>
            <div className='h-0.5 max-w-96 bg-[#E5E5E5]'>

            </div>
            <span className="flex flex-wrap text-sm gap-4 my-1 items-center font-bold">
              <h1 className='text-black text-xl'>{card.price}</h1>
              <p className='text-[#4F4F4F] line-through'>{card.originalPrice}</p>
              <button className='bg-[#171719] shadow-md  hover:shadow-pink-600 hover:text-pink-600  text-white text-sm font-normal p-3 rounded-lg flex-1'>
                {card.buttonText}
              </button>
            </span>
          </div>
        </li>
      ))}
      </ul>
    </div>
    <div className='bg-[#09090B] py-28 flex justify-center gap-12'>
      <div className='text-white max-w-2xl'>
        <h1 className='text-4xl font-bold pb-4'>Your Journey to a Successful Tech Career Starts Here ✔</h1>
        <p className='text-lg font-light pb-4 pr-7'>Transform your coding skills with structured learning paths and expert-led guidance, ensuring you stay ahead in the tech industry.</p>
        <ul className='text-2xl font-medium'>
          <li className='flex items-center pb-2'><Image className='pr-1 ' src={listIcon} alt=''/>Industry-Relevant Courses</li>
          <li className='flex items-center pb-2'><Image className='pr-1 ' src={listIcon} alt=''/>Mentorship from Senior Developers</li>
          <li className='flex items-center pb-2'><Image className='pr-1 ' src={listIcon} alt=''/>Learn Practical Skills Used by Top Tech Companies</li>
          <li className='flex items-center pb-2'><Image className='pr-1 ' src={listIcon} alt=''/>Stay Updated with Emerging Trends and Tools</li>
        </ul>
      </div>
      <div className='grid grid-cols-2 gap-2 max-w-2xl'>
        <div className='bg-white px-1 py-3 text-lg cursor-pointer font-normal rounded-lg text-center flex items-center gap-x-3 '>
        <Image alt='' className='pl-2' src={icon5} /><h1>Full Stack Web Developer Bootcamp</h1>
        </div>
        <div className='bg-white px-1 py-3 text-lg cursor-pointer font-normal rounded-lg text-center flex items-center gap-x-3'>
          <Image alt='' className='pl-2' src={icon6} /><h1>Mastering React and Next.js</h1>
        </div>
        <div className='bg-white px-1 py-3 text-lg cursor-pointer font-normal rounded-lg text-center flex items-center gap-x-3'>
          <Image alt='' className='pl-2' src={icon7} /><h1>AI and Machine Learning with Python</h1>
        </div>
        <div className='bg-white px-1 py-3 text-lg cursor-pointer font-normal rounded-lg text-center flex items-center gap-x-3'>
          <Image alt='' className='pl-2' src={icon8} /><h1>Mastering APIs and Microservices</h1>
        </div>
        <div className='bg-white px-1 py-3 text-lg cursor-pointer font-normal rounded-lg text-center flex items-center gap-x-3'>
          <Image alt='' className='pl-2' src={icon9} /><h1>Data Structures and Algorithms in Depth</h1>
        </div>
        <div className='bg-white px-1 py-3 text-lg cursor-pointer font-normal rounded-lg text-center flex items-center gap-x-3'>
          <Image alt='' className='pl-2' src={icon10} /><h1 >Blockchain Development for Beginners</h1>
        </div>
        <div className='bg-white px-1 py-3 text-lg cursor-pointer font-normal rounded-lg text-center flex items-center gap-x-3'>
          <Image alt='' className='pl-2' src={icon11} /><h1>DevOps Foundations with Docker and Kubernetes</h1>
        </div>
        <div className='bg-white px-1 py-3 text-lg cursor-pointer font-normal rounded-lg text-center flex items-center gap-x-3'>
          <Image alt=''  src={icon12} /><h1>Cybersecurity Essentials: From Theory to Practice</h1>
        </div>
      </div>
      
    </div>
    <div id='about-us' className='bg-[#E5E5E5] pb-20'>
    <div className="flex justify-center text-2xl md:text-4xl font-bold pt-20 pb-10">
      Our World Class Instructors
    </div>
    <ul className='grid grid-cols-4 max-w-[62rem] mx-auto gap-4'>
      <li className='bg-white rounded-lg'>
        <Image alt='' src={human1}/>
        <div className='text-center py-4 '>
          <h1 className='font-bold text-xl '>Mr. John Doe </h1>
          <h2 className='text-sm text-[#115E57]'>Software Engineer </h2>
          <p className='text-xxs'>Microsoft</p>
          <Image alt='' className='mx-auto py-2 max-w-20' src={smIcons}/>
        </div>
      </li>
      <li className=' bg-white rounded-lg'>
        <Image alt='' src={human2}/>
        <div className='text-center py-4'>
          <h1 className='font-bold text-xl '>Mr. John Doe </h1>
          <h2 className='text-sm text-[#115E57]'>Full Stack Developer </h2>
          <p className='text-xxs'>Shopify </p>
          <Image alt='' className='mx-auto py-2 max-w-20' src={smIcons}/>
        </div>
      </li>
      <li className='bg-white rounded-lg'>
        <Image alt='' src={human3}/>
        <div className='text-center py-4'>
          <h1 className='font-bold text-xl '>Mr. John Doe </h1>
          <h2 className='text-sm text-[#115E57]'>Machine Learning Expert </h2>
          <p className='text-xxs'>Open AI </p>
          <Image alt='' className='mx-auto py-2 max-w-20' src={smIcons}/>
        </div>
      </li>
      <li className='bg-white rounded-lg'>
        <Image alt='' src={human4}/>
        <div className='text-center py-4'>
          <h1 className='font-bold text-xl '>Mr. John Doe </h1>
          <h2 className='text-sm text-[#115E57]'>DevOps Engineer </h2>
          <p className='text-xxs'>12 Google </p>
          <Image alt='' className='mx-auto py-2 max-w-20' src={smIcons}/>
        </div>
      </li>
    </ul>
    </div>
    <div>
    <div className="flex justify-center text-2xl md:text-4xl font-bold pt-20 pb-10">
    What You Get at CodeCraft 
    </div>
    <div className='grid grid-cols-2 max-w-5xl mx-auto gap-x-10 gap-y-14 pb-24 '>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6' src={icon13}/>
        <div className=''>
        <h1 className='font-medium text-xl'>24/7 Support </h1>
        <p className='text-base pt-3  '>
        Get access to continuous support throughout your learning journey, ensuring all your questions are answered promptly.</p>
        </div>
      </div>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6' src={icon14}/>
        <div className=''>
        <h1 className='font-medium text-xl'>Professional Certification</h1>
        <p className='text-base pt-3  '>
        Earn industry-recognized certificates to boost your profile and showcase your expertise in the latest technologies.</p>
        </div>
      </div>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6' src={icon15}/>
        <div className=''>
        <h1 className='font-medium text-xl'>Job Interview Preparation</h1>
        <p className='text-base pt-3  '>
        Prepare for job interviews with mock interviews, expert guidance, and tips to land your dream role in tech.</p>
        </div>
      </div>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6' src={icon16}/>
        <div className=''>
        <h1 className='font-medium text-xl'>Career Roadmap </h1>
        <p className='text-base pt-3  '>
        Follow a structured career path designed to take you from beginner to professional, with step-by-step guidance along the way.</p>
        </div>
      </div>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6' src={icon17}/>
        <div className=''>
        <h1 className='font-medium text-xl'>Hands-On Assignments</h1>
        <p className='text-base pt-3  '>Hands-On Assignments
        Apply your skills with real-world assignments that reinforce your learning and build your portfolio.</p>
        </div>
      </div>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6' src={icon18}/>
        <div className=''>
        <h1 className='font-medium text-xl'>Industry Expert Mentorship</h1>
        <p className='text-base pt-3  '> 
        Learn from seasoned professionals in the tech industry, gaining insights and advice to fast-track your career growth.</p>
        </div>
      </div>
    </div>
    </div>
    <div id='feedback' className='bg-[#E5E5E5] pb-20'>
    <div className="flex justify-center text-2xl md:text-4xl font-bold pt-20 pb-10">
    Feedback
    </div>
    <div className=''>
      <ul className='grid grid-cols-3 max-w-7xl mx-auto gap-2'>
      <li className='bg-[#171719] rounded-lg p-5'>
        <Image alt='' className='max-w-10 pb-4' src={icon19}/>
        <p className='text-sm text-[#F5F5F7] font-extralight pb-4'>Before taking this course, I struggled with understanding databases. Now I can design and manage SQL databases with ease, and I have even integrated them into full-stack applications.</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11 bg-white rounded-full' src={comment}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm text-white'>John Doe </h1>
          <h3 className='text-xxs text-[#F5F5F7]'>DevOps Engineer</h3>
        </div>
        </div>
      </li>
      <li className='bg-[#171719] rounded-lg p-5'>
        <Image alt='' className='max-w-10 pb-4' src={icon19}/>
        <p className='text-sm text-[#F5F5F7] font-extralight pb-4'>This course was perfect for learning mobile app development. I now know how to build cross-platform apps using Flutter, and I have already published my first app on the Play Store!</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11 bg-white rounded-full' src={comment}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm text-white'>John Doe </h1>
          <h3 className='text-xxs text-[#F5F5F7]'>Android Developer</h3>
        </div>
        </div>
      </li>
      <li className='bg-[#171719] rounded-lg p-5'>
        <Image alt='' className='max-w-10 pb-4' src={icon19}/>
        <p className='text-sm text-[#F5F5F7] font-extralight pb-4'>The course taught me how to write clean and efficient Python code. The instructors explained complex algorithms in a way that was easy to understand, and now I can apply them in my projects.</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11 bg-white rounded-full' src={comment}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm text-white'>John Doe </h1>
          <h3 className='text-xxs text-[#F5F5F7]'>Django Developer</h3>
        </div>
        </div>
      </li>
      <li className='bg-[#171719] rounded-lg p-5'>
        <Image alt='' className='max-w-10 pb-4' src={icon19}/>
        <p className='text-sm text-[#F5F5F7] font-extralight pb-4'>The flexibility of learning at my own pace helped me balance my studies with my job. I highly recommend it to anyone looking to enhance their skills!</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11 bg-white rounded-full' src={comment}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm text-white'>John Doe </h1>
          <h3 className='text-xxs text-[#F5F5F7]'>Software Engineer</h3>
        </div>
        </div>
      </li>
      <li className='bg-[#171719] rounded-lg p-5'>
        <Image alt='' className='max-w-10 pb-4' src={icon19}/>
        <p className='text-sm text-[#F5F5F7] font-extralight pb-4'>The course was a game-changer for me. I learned how to use React for front-end development and connect it with Node.js on the backend. The real-world projects were incredibly helpful.</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11 bg-white rounded-full' src={comment}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm text-white'>John Doe </h1>
          <h3 className='text-xxs text-[#F5F5F7]'>MERN Stack Developer</h3>
        </div>
        </div>
      </li>
      <li className='bg-[#171719] rounded-lg p-5'>
        <Image alt='' className='max-w-10 pb-4' src={icon19}/>
        <p className='text-sm text-[#F5F5F7] font-extralight pb-4'>I had no idea how to start my first coding project. This course helped me understand the basics of HTML, CSS, and JavaScript, and now I am confidently building my own websites.</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11 bg-white rounded-full' src={comment}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm text-white'>John Doe </h1>
          <h3 className='text-xxs text-[#F5F5F7]'>Web Developer</h3>
        </div>
        </div>
      </li>
      </ul>
    </div>
    <div className='relative p-36 flex items-center justify-center'>
      <Image alt='' className='absolute max-w-9xl rounded-xl h-72 ' src={background}/>
      <div className='relative z-10 flex items-center gap-10'>
         <div className='text-white'>
            <h3 className=' text-3xl font-bold'>Join CodeCraft</h3>
            <h1 className='text-[#D1FFA3] text-4xl font-bold'>Unlock exclusive access to all courses at 25% off</h1>
            <h3 className='text-3xl font-bold'>Elevate your skills without breaking the bank!</h3>
         </div>
          <button className='bg-[#FFFFFF] text-black rounded-full px-4 py-2 hover:text-pink-600'>Become a member </button>
      </div>
    </div>

    <div className="flex justify-center text-2xl md:text-4xl font-bold">
    Got Questions? We have Got Answers!
    </div>
    <div className='grid grid-rows-5 max-w-[52rem] pt-10 mx-auto gap-2 pb-10'>
      <div className=' bg-white font-bold text-base rounded-lg flex '>
          <h1 className=' py-6 pl-5'>Is it possible to withdraw from a course?</h1>
      </div>
      <div className=' bg-white font-bold text-base rounded-lg flex '>
          <h1 className=' py-6 pl-5'>Will my certification ever expire?</h1>
      </div>   
      <div className=' bg-white font-bold text-base rounded-lg flex '>
          <h1 className=' py-6 pl-5'>How do I report a technical issue?</h1>
      </div>
      <div className=' bg-white font-bold text-base rounded-lg flex '>
          <h1 className=' py-6 pl-5'>Forgot your password? No problem!</h1>
      </div>
      <div className=' bg-white font-bold text-base rounded-lg flex '>
          <h1 className=' py-6 pl-5'>How can I contact your team?</h1>
      </div>
      

    </div>

  </div>
  <div className='bg-[#042F2B] text-white '>
      <div className=' grid grid-cols-4 max-w-7xl mx-auto pt-24 pb-10'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-2'>
            <Image alt='' className='max-w-9 rounded-full' src={logo}/>
            <h1 className='text-3xl font-EBGaramond'>CodeCraft</h1>
          </div>
          <p className='text-base font-light max-w-64 '>
          If you're seeking top-tier programming courses, this platform is your ultimate destination!</p>
          <div className='flex gap-4'>
            <Image alt='' className=' max-h-8 max-w-8' src={fbIcon}/>
            <Image alt='' className=' max-h-8 max-w-8' src={yIcon}/>
            <Image alt='' className=' max-h-8 max-w-8' src={twtIcon}/>
            <Image alt='' className=' max-h-8 max-w-8' src={linkedIcon}/>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='text-xl'>Company</h1>
          <h3 className='text-base font-light'>Career</h3>
          <h3 className='text-base font-light'>Join as an instructor</h3>
          <h3 className='text-base font-light'>Privacy Policy</h3>
          <h3 className='text-base font-light'>Refund Policy</h3>
          <h3 className='text-base font-light'>Conditions</h3>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='text-xl'>Others  </h1>
          <h3 className='text-base font-light'>Blog</h3>
          <h3 className='text-base font-light'>Guidelines</h3>
          <h3 className='text-base font-light'>Certifications</h3>
          <h3 className='text-base font-light'>All Courses </h3>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='text-xl'>Contact Us </h1>
          <h3 className='text-base font-light'>WhatsApp: +8801680422735 (24x7)</h3>
          <h3 className='text-base font-light'>Abroad : +8806 895 926 23</h3>
          <h3 className='text-base font-light'>Email: orkadas@gmail.com</h3>
        </div>
      </div>
      <Image alt='' className='py-10 mx-auto max-w-4xl' src={Line}/>
      <p className=' text-[.8rem] text-center font-light pb-10'>
      Copyright © 2023 - 2024 CodeCraft. All rights reserved.</p>
  </div>

</div>
  )
}

export default Home