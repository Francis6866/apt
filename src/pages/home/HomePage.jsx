import React from 'react'
import BlockBtn from '../../components/button/BlockBtn'
import OutlineBtn from '../../components/button/OutlineBtn'

const HomePage = () => {
  return (
    <>
        {/* QUICK WAY */}
        <section className='py-10 mb-15 lg:mb-0 lg:py-15'>
            <div className='flex items-center justify-between space-y-8 lg:space-y-48'>
                <div className="w-3/12 hidden lg:block">
                    <div className="leftImg w-[300px] h-[500px] border rounded-2xl">
                        <img alt="" className='w-full object-cover'/>
                    </div>
                </div>

                
                <div className="w-full lg:w-6/12 px-2">
                    <div className="findOut lg:col-span-2 space-y-8 px-2 text-center flex flex-col items-center">
                        <h3 className='text-[#3D081B] text-[1.25rem]'>QUICK WAY TO FIND YOUR NEW PROPERTY & NEW FUTURE</h3>
                        <div>
                            <p className='text-center opacity-70' style={{lineHeight: '2'}}>Discover the perfect home or investment opportunity with ease. Whether you're searching for a modern apartment, a cozy family house, or a prime commercial space, we make the process seamless. Explore top listings, compare prices, and take the next step toward your dream property today!</p>
                        </div>
                        <div className='w-1/2'>
                            <BlockBtn text='LEARN MORE'/>
                        </div>
                    </div>
                </div>


                <div className="w-3/12 justify-items-end hidden lg:block">
                    <div className="leftImg w-[300px] h-[500px] border rounded-2xl">
                        <img alt="" className='w-full object-cover'/>
                    </div>
                </div>
            </div>
        </section>

        {/* What we do */}
        <section className='py-10 lg:py-15 justify-center space-y-20'>
            <div className="intro space-y-4 text-center">
                <h2 className='text-[0.9rem]'>WHAT WE DO</h2>
                <h3 className='text-[#3D081B] uppercase'>We turn dreams into reality</h3>
            </div>

           <div className='flex flex-wrap justify-center gap-8 px-10 space-y-10'>

                <div className='w-full lg:w-[40%] space-y-2 flex flex-col items-center'>
                    <div className='img w-[450px] h-[400px] rounded-2xl border'></div>
                    <div className="description space-y-4 text-center">
                        <h3 className=''>ESTATE DEVELOPMENT</h3>
                        <p className='text-center opacity-40' style={{lineHeight: '2'}}>Imagine waking up in your dream home or owning a property that secures your future. We bring visions to life with expertly designed estates, prime locations, and seamless property acquisition.</p>
                        <OutlineBtn text='LEARN MORE'/>
                    </div>
                </div>{/* first */}


                <div className='w-full lg:w-[40%] space-y-2 flex flex-col items-center'>
                    <div className='img w-[450px] h-[450px] rounded-2xl border'></div>
                    <div className="description space-y-4 text-center">
                        <h3 className=''>HOTEL DEVELOPMENT</h3>
                        <p className='text-center opacity-40' style={{lineHeight: '2'}}>Experience hospitality at its finest! Whether you're looking to elevate your hotel's operations, enhance guest experiences, or maximize profitability, we provide expert solutions tailored to your needs.</p>
                        <OutlineBtn text='LEARN MORE'/>
                    </div>
                </div>{/* second */}
           </div>

        </section>
    </>
  )
}

export default HomePage  