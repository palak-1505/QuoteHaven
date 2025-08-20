import React from 'react'
import inspire from '../../assets/inspirational.jpg'

function Moods() {
    return (
        <div className='bg-gray-50 w-full min-h-screen'>
            <div className='my-12'>
                <div className='font-extrabold font-serif text-3xl text-gray-700 text-center'>
                    <h1>"What’s your vibe today? Pick a mood, find your words."</h1>
                </div>

                <div className='my-6'>
                    <div className=' grid grid-cols-4 gap-4'>
                        <div className='rounded-t-3xl  border-2 border-black pb-4'>
                            <img className='rounded-t-3xl w-fit h-64'
                            src={inspire} 
                            alt="Inspiration" />
                            <h1 className=' text-xl text-center  text-gray-500 font-bold pt-4'>Inspirational</h1>

                        </div>
                        <div className='rounded-t-3xl  border-2 border-black pb-4'>
                            <img className='rounded-t-3xl w-fit h-64'
                            src={inspire} 
                            alt="Inspiration" />
                            <h1 className=' text-xl text-center  text-gray-500 font-bold pt-4'>Inspirational</h1>

                        </div>
                        <div className='rounded-t-3xl  border-2 border-black pb-4'>
                            <img className='rounded-t-3xl w-fit h-64'
                            src={inspire} 
                            alt="Inspiration" />
                            <h1 className=' text-xl text-center  text-gray-500 font-bold pt-4'>Inspirational</h1>

                        </div>
                        <div className='rounded-t-3xl  border-2 border-black pb-4'>
                            <img className='rounded-t-3xl w-fit h-64'
                            src={inspire} 
                            alt="Inspiration" />
                            <h1 className=' text-xl text-center  text-gray-500 font-bold pt-4'>Inspirational</h1>

                        </div>

                    </div>

                </div>

            </div>
        </div>
        
    )
}

export default Moods


