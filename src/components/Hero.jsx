import React from 'react'

const Hero = () => {
  return (
    <section className='bg-[url("/src/assets/welcome-hero/welcome-banner.jpg")]'>
         <div className='h-[900px] flex flex-col items-center justify-center text-white font-bold text-center'>
            <h1 className='text-5xl uppercase '>get your desired car in resonable price</h1>
            <p className='mt-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
            <button className='mt-8 px-12 py-4 bg-[#4e4ffa] rounded-md'>Contact Us</button>
        </div>
    </section>
  )
}

export default Hero