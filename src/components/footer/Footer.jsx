import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className='bg-[#2A3132] text-white space-y-12 py-24 px-5 lg:px-10'>
        <div className="grid lg:grid-cols-5 gap-4 space-y-8">
            <section>{/* brand logo */}
                <Link className='text-white'>
                    brand Logo
                </Link>
            </section>

            {/* contact */}
            <section className='lg:col-span-2 space-y-4'>
                <h3 className=''>CONTACT</h3>
                <address className=' opacity-50'>
                    Shop 7, kamola plaza, opposite Jezco filling station, Iyana Oja bus stop, Ire Akari Estate, Isolo
                </address>
                <div className=' opacity-50 space-y-2'>
                    <a href="mailto: aptworths@gmail.com" className='block text-[0.75rem] underline'>aptworths@gmail.com</a>
                    <a href="phone" className='block text-[0.75rem] italic'>+234-90231-59559, +234-91231-59661</a>
                </div>
            </section>

            {/* use link */}
            <section className='space-y-4'>
                <h3>USEFUL LINKS</h3>
                <Link className=' opacity-50 block'>About Us</Link>
                <Link className=' opacity-50 block'>Contact Us</Link>
            </section>

            {/* newsletter */}
            <section className='space-y-4'>
                <h3>NEWSLETTER</h3>

                <div className='bg-[#343A40] rounded overflow-hidden flex w-[300px] lg:w-full'>
                    <input type="email" placeholder='Email address...' className='outline-0 border-0 w-0 p-4 grow'/>
                    <button className='py-4 px-2 bg-[#E1D7CA] text-[#3D081B] w-auto'>SUBMIT</button>
                </div>
            </section>
        </div>

        {/* copywright */}
        <div>
            <p className=' opacity-50 text-center'>Copyright &copy; AptWorths Hotels & Estates Ltd 2025. All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer