import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'
import Project1 from "../image/project1.jpg";
import Project2 from "../image/project2.jpg";
import Project3 from "../image/project3.jpg";
import Project4 from "../image/project4.jpg";
// Motion
import {motion} from 'framer-motion';
// Variants
import {fadeIn} from "../Components/variants";


export default class Portfolio extends Component {
  render() {
    return (
      <div id='portfolio' className='bg-stone-900 flex flex-col xl:px-16 px-6 py-16 place-items-center gap-6'>
        <div>
            <h3 className='text-neutral-300 text-lg font-normal tracking-wider'>Latest Works</h3>
            <p className='text-neutral-200 font-semibold text-2xl md:text-5xl'>Explore My Popular Projects</p>
        </div>
        <div className='flex flex-col gap-10 sm:gap-0'>
            {/* Each project */}
            <div className='flex flex-col sm:flex-row items-center gap-5 sm:gap-14 sm:m-8'>
                <motion.img 
                    variants={fadeIn("right", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false}}
                    className='sm:w-1/2' src={Project1} alt="" />
                <motion.div
                    variants={fadeIn("left", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false}} 
                    className='text-start gap-4 flex flex-col sm:gap-6'>
                    <p className='text-lime-400 text-lg'>Website Development</p>
                    <p className='text-white font-medium text-2xl sl:text-4xl sm:text-5xl'>FoundervsFinance Website</p>
                    <p className='text-neutral-300 sm:text-lg'>Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis...</p>
                    <div><FontAwesomeIcon className='rotate-45 bg-black p-4 rounded-full outline outline-1 outline-slate-600 hover:outline-lime-500' icon={faArrowUp} style={{color: "#C9F31D",}} /></div>
                </motion.div>
            </div>
            {/* Each project */}
            <div className='flex flex-col sm:flex-row-reverse items-center gap-5 sm:gap-14 sm:m-8'>
                <motion.img 
                    variants={fadeIn("left", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false}}
                    className='sm:w-1/2' src={Project2} alt="" />
                <motion.div
                    variants={fadeIn("right", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false}} 
                    className='text-start gap-4 flex flex-col sm:gap-6'>
                    <p className='text-lime-400 text-lg'>Product Design</p>
                    <p className='text-white font-medium text-2xl sl:text-4xl sm:text-5xl'>Mobile Application Design</p>
                    <p className='text-neutral-300 sm:text-lg'>Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis...</p>
                    <div><FontAwesomeIcon className='rotate-45 bg-black p-4 rounded-full outline outline-1 outline-slate-600 hover:outline-lime-500' icon={faArrowUp} style={{color: "#C9F31D",}} /></div>
                </motion.div>
            </div>
            {/* Each project */}
            <div className='flex flex-col sm:flex-row items-center gap-5 sm:gap-14 sm:m-8'>
                <motion.img 
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false}}
                className='sm:w-1/2' src={Project3} alt="" />
                <motion.div 
                    variants={fadeIn("left", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false}}
                    className='text-start gap-4 flex flex-col sm:gap-6'>
                    <p className='text-lime-400 text-lg'>Product Design</p>
                    <p className='text-white font-medium text-2xl sl:text-4xl sm:text-5xl'>Mobile Application Design</p>
                    <p className='text-neutral-300 sm:text-lg'>Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis...</p>
                    <div><FontAwesomeIcon className='rotate-45 bg-black p-4 rounded-full outline outline-1 outline-slate-600 hover:outline-lime-500' icon={faArrowUp} style={{color: "#C9F31D",}} /></div>
                </motion.div>
            </div>
            {/* Each project */}
            <div className='flex flex-col sm:flex-row-reverse items-center gap-5 sm:gap-14 sm:m-8'>
                <motion.img
                    variants={fadeIn("left", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false}}
                    className='sm:w-1/2' src={Project4} alt="" />
                <motion.div
                    variants={fadeIn("right", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false}} 
                    className='text-start gap-4 flex flex-col sm:gap-6'>
                    <p className='text-lime-400 text-lg'>Product Design</p>
                    <p className='text-white font-medium text-2xl sl:text-4xl sm:text-5xl'>Mobile Application Design</p>
                    <p className='text-neutral-300 sm:text-lg'>Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis...</p>
                    <div><FontAwesomeIcon className='rotate-45 bg-black p-4 rounded-full outline outline-1 outline-slate-600 hover:outline-lime-500' icon={faArrowUp} style={{color: "#C9F31D",}} /></div>
                </motion.div>
            </div>
        </div>
      </div>
    )
  }
}
