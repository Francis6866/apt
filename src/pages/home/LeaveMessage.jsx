import React from 'react'
import BlockBtn from '../../components/button/BlockBtn'

const LeaveMessage = () => {
  return (
    <>
         {/* leave a message */}
         <section className='py-10 lg:py-15 space-y-10'>
        <div className="intro space-y-4 text-center">
                <h2 className='text-[0.9rem] uppercaseS'>Leave a Message</h2>
                <h3 className='text-[#3D081B] uppercase'>Lets make something new together!</h3>
        </div>

        {/* <form action="" className='flex flex-col items-center space-y-4'>
            <div className='flex flex-wrap justify-center gap-10'>
                <div className='bg-white border border-[#ccc] rounded w-[85%] lg:w-4/5'>
                    <input type="text" className='p-2.5 border-0 outline-0 rounded w-full' placeholder='Your name'/>
                </div>
                <div className='bg-white border border-[#ccc] rounded w-[85%] lg:w-4/5'>
                    <input type="text" className='p-2.5 border-0 outline-0 rounded w-full' placeholder='Your email'/>
                </div>
            </div>

            <div className='bg-white border border-[#ccc] rounded lg:w-full'>
                <textarea 
                    name="" 
                    id="" 
                    cols="30" 
                    rows="10"></textarea>
            </div>

            <div className='w-full lg:w-1/2'>
                <BlockBtn text='Send a message'/>
            </div>
           
        </form> */}

        <form className='flex flex-col items-center space-y-4 gap-5'>
            <div className="row max-lg:w-3/4 max-lg:flex max-lg:flex-col lg:flex gap-5">
                <div className='bg-white border border-[#ccc] rounded'><input type="text" className='p-2.5 outline-0 border-0' placeholder='Your name'/></div>
                <div className='bg-white border border-[#ccc] rounded'><input type="text" className='p-2.5 outline-0 border-0' placeholder='Your email'/></div>
            </div>
            <div className="row w-3/4 lg:w-1/2">
                <div className='bg-white border border-[#ccc] rounded'>
                    <textarea
                        cols="30"
                        rows="10"
                        className='p-2.5 outline-0 border-0'
                        placeholder='Ask us any question'
                    ></textarea>
                </div>
            </div>
            <div className="row w-3/4 lg:w-[15%]">
                <div>
                    <BlockBtn text='Send Message'/>
                </div>
            </div>

            <div className='w-3/4 text-center'>
                <p>By submitting this form it means you accept our Terms & Conditions for processing personal data.</p>
            </div>
        </form>
        </section>

    </>
  )
}

export default LeaveMessage