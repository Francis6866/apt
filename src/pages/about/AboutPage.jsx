import React from 'react'
import { Link } from 'react-router'


const AboutPage = () => {
  return (
    <div className='bg-[#F9FAF1]'>
        <header className='py-8 text-center space-y-4 uppercase'>
            <h1 className='font-[500px] text-2xl'>OUR MISSION</h1>
            <div className='space-x-2'>
                <Link>Home &gt;</Link>
                <span className='opacity-80'>Mission</span>
            </div>
        </header>

        <section className='flex flex-col items-center gap-20 py-10'>
            {/* first row */}
            <div className="row lg:w-[80%]">
                <div className="grid lg:grid-cols-2 items-center gap-10 px-10">
                    <div className='img h-[400px] lg:w-[500px] lg:h-[600px] border rounded-2xl overflow-hidden'></div>
                    <div className='text-center space-y-4'>
                        <h2 className='text-[#3D081B] text-[0.85rem]'>OUR MISSION</h2>
                        <h3 className='text-[#3D081B] text-[1.4rem] lg:text-[2rem] font-[400]'>TO BE THE MOST TRUSTED NAME IN REAL ESTATE GLOBALLY</h3>
                        <p className='text-justify opacity-70' style={{lineHeight: '2'}}>We are committed to transforming the real estate industry by providing innovative, transparent, and customer-centric solutions. Our goal is to create lasting value for homeowners, investors, and businesses through integrity, excellence, and cutting-edge property solutions. With a focus on quality, sustainability, and client satisfaction, we strive to build communities, shape skylines, and unlock opportunities worldwide. Whether you are buying, selling, or investing, we ensure a seamless experience that turns real estate dreams into reality.</p>
                    </div>
                </div>
            </div>

            {/* second row */}
            <div className="row lg:w-[80%]">
                <div className="grid lg:grid-cols-2 items-center gap-10 px-10">
                    <div className='img h-[400px] lg:w-[500px] lg:h-[600px] border rounded-2xl overflow-hidden'></div>
                    <div className='text-center space-y-4 lg:-order-1'>
                        <h2 className='text-[#3D081B] text-[0.85rem]'>OUR VISION</h2>
                        <h3 className='text-[#3D081B] text-[1.4rem] lg:text-[2rem] font-[400]'>CREATING A GREAT TOMORROW FOR EVERYONE</h3>
                        <p className='text-justify opacity-70' style={{lineHeight: '2'}}>We envision a future where real estate is more than just property—it’s a foundation for growth, security, and prosperity. Our goal is to develop sustainable, innovative, and accessible spaces that empower individuals, families, and businesses to thrive. By integrating cutting-edge technology, ethical practices, and a customer-first approach, we aim to shape vibrant communities and redefine the real estate experience. Together, we build not just homes and investments, but a brighter tomorrow for all.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* What we do */}
        <section className='py-10 lg:py-15 space-y-25'>
            <div className="intro space-y-4 text-center">
                <h2 className='text-[0.9rem]'>WHAT WE DO</h2>
                <h3 className='text-[#3D081B] uppercase'>We turn dreams into reality</h3>
            </div>

           <div className='flex flex-col items-center gap-8 px-10 space-y-10'>

                <div className='lg:w-3/4 space-y-2 flex flex-col items-center'>
                    <div className='img w-full lg:w-[450px] h-[450px] rounded-2xl border'></div>
                    <div className="description space-y-4">
                        <h3 className='text-center'>ESTATE DEVELOPMENT</h3>
                        <p className='opacity-40 text-justify w-full' style={{lineHeight: '2'}}>Imagine waking up in your dream home or owning a property that secures your future. We bring visions to life with expertly designed estates, prime locations, and seamless property acquisition. Whether you are looking for a perfect home, a smart investment, or a fresh start, we make it happen—effortlessly. Join our community today and be the first to access exclusive property deals, expert insights, and opportunities that turn dreams into reality. Subscribe now and take the first step toward your future!</p>
                    </div>
                </div>


                <div className='lg:w-3/4 space-y-2 flex flex-col items-center'>
                    <div className='img w-full lg:w-[450px] h-[450px] rounded-2xl border'></div>
                    <div className="description space-y-4 w-full">
                        <h3 className='text-center'>HOTEL DEVELOPMENT</h3>
                        <p className='text-justify opacity-40' style={{lineHeight: '2'}}>Imagine waking up in your dream home or owning a property that secures your future. We bring visions to life with expertly designed estates, prime locations, and seamless property acquisition. Whether you are looking for a perfect home, a smart investment, or a fresh start, we make it happen—effortlessly. Join our community today and be the first to access exclusive property deals, expert insights, and opportunities that turn dreams into reality. Subscribe now and take the first step toward your future!</p>
                    </div>
                </div>
           </div>
        </section>
        
    </div>
  )
}

export default AboutPage