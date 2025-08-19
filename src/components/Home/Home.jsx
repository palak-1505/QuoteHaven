import React from 'react'
import { motion } from "framer-motion";
import SearchBar from './SearchBar';
import QuoteOfTheDay from './QuoteOfTheDay';
import QuoteCategories from './QuoteCategories';




function Home() {
    return (
        
        <section className='bg-gray-100 h-full text-gray-700'>
           <div className='flex justify-center items-center flex-col' >
            <div className='w-2/3  my-4 bg-gray-100 '>
                <div className='text-5xl font-extrabold mt-12 mb-4 text-center'>
                <h1 className='font-serif'>Find Words That Feel Like You</h1>
                </div>
                <div className='text-center text-lg font-medium'>
                    <p>Quotes for every mood—Motivated. Calm. Curious. Romantic.</p>
                </div>
 
                <div className='flex justify-center mt-8 '>
                    <div className=' h-32 text-center text-xl'>
                      <p className='text-orange-500'>Every feeling has a story, and every story deserves the right words.
                       At QuoteHaven, we help you capture your emotions—whether you are
                       chasing motivation, seeking calm, exploring curiosity, or
                       embracing romance. Save what touches your heart and share
                       it with the people who matter.
                       </p>
                   </div>
                </div>
                <SearchBar/>
                <QuoteCategories/>
                <QuoteOfTheDay/>
                

                
            </div>
           </div>
    </section> 
        
    );
}

export default Home;
