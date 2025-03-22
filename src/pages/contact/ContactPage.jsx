import React from 'react'
import { Link } from 'react-router'
import LeaveMessage from '../home/LeaveMessage'


const ContactPage = () => {
  return (
    <div className='bg-[#F9FAF1]'>
       <header className='py-8 text-center space-y-4 uppercase'>
            <h1 className='font-[500px] text-3xl'>CONTACT US</h1>
            <div className='space-x-2'>
                <Link>Home &gt;</Link>
                <span className='opacity-80'>Contact</span>
            </div>
        </header>

        {/* mapped location */}
        <section>
            <div className='text-center py-8 space-y-4 px-10'>
                <h2 className='uppercase'>MAIN OFFICE</h2>
                <h3 className='uppercase'>Shop 7, kamola plaza, opposite Jezco filling station, Iyana Oja bus stop, Ire Akari Estate, Isolo</h3>

                <div className='py-8 space-y-2 opacity-70 text-[0.9rem]'>
                    <p>aptworths@gmail.com</p>
                    <p>+234-90231-59559, +234-91231-59661, +234-90231-59665, +234-91231-59664</p>
                </div>

                <div className='map border h-[400px]'></div>
            </div>

            
        {/* leave a message */}
        <LeaveMessage />
        </section>
    </div>
  )
}

export default ContactPage
