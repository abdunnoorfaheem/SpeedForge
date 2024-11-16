import React from 'react'
import Home from '../pages/Home'
import Service from '../pages/Service'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <section className='h-[105px]   bg-hero-pattern bg-no-repeat '>
        <nav className='flex items-center justify-between px-40 py-12 font-bold text-white'>
            <div>
                <h2 className='text-2xl uppercase'>carvilla </h2>
            </div>
            <div>
                <ul className='flex gap-12'>
                    <li className='text-[#4e4ffa]'><Link to="/">Home</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/featuredCar">Featured Cars</Link></li>
                    <li>New Cars</li>
                    <li>Brands</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>

       
    </section>
  )
}

export default Header