import React from 'react'
import { Link } from 'react-router'
import GalleryCard from './GalleryCard'

const GalleryPage = () => {
  
  return (
    <div className='bg-[#F9FAF1]'>
        <header className='py-8 text-center space-y-4 uppercase'>
            <h1 className='font-[500px] text-2xl'>Gallery</h1>
            <div className='space-x-2'>
                <Link>Home &gt;</Link>
                <span className='opacity-80'>Gallery</span>
            </div>
        </header>

        <section className='flex justify-center py-10'>
            <div className='grid lg:grid-cols-3 gap-10 pb-8'>
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
            </div>
        </section>
    </div>
  )
}

export default GalleryPage