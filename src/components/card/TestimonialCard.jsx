import React from 'react'

const TestimonialCard = () => {
  return (
    <div className='rounded-2xl shadow-lg lg:w-[300px] w-[350px] py-8 px-2 space-y-2'>
        <header className='flex gap-4'>
            <div className='w-[70px] h-[60px] border rounded-2xl'>
                <img  alt="" className='w-full object-cover'/>
            </div>
            <div className="report">
                <p className='text-[#3D081B]'>Professional & Hassle-Free Experience</p>
            </div>
        </header>

        {/* costumers review */}
        <div>
            <p className='text-[0.9rem]' style={{wordSpacing: '5px'}}>Finding my dream home felt effortless, thanks to Aptworths! Their team was professional, responsive, and truly cared about my needs. From property search to closing the deal, everything was seamless. I could not be happier with my new home!</p>
        </div>
    </div>
  )
}

export default TestimonialCard