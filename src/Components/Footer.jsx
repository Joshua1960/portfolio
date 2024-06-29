import React, { Component } from 'react'
import Logo from '../image/delis_logo.jpg';

export default class Footer extends Component {
  render() {
    return (
        <div class="bg-stone-900" id='footer'>
            <div class="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
                <a href="www.google.com">
                <div className='w-20 xl:w-34'><img src={Logo} alt="logo" /></div>
                </a>
                <div class="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
                    <div className='text-white hover:text-lime-500'>Home</div>
                    <div className='text-white hover:text-lime-500'>About</div>
                    <div className='text-white hover:text-lime-500'>Services</div>
                    <div className='text-white hover:text-lime-500'>Portfolio</div>
                    <div className='text-white hover:text-lime-500'>Skills</div>
                    <div className='text-white hover:text-lime-500'>Contact</div>
                </div>
        
                <p class="mt-6 text-ls text-lime-500 lg:mt-0 tracking-wide">© Copyright 2023 Delis Tech. </p>
            </div>
        </div>
    )
  }
}
